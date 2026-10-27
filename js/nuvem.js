// Gravação na nuvem (Firebase do projeto crivo-pesquisa).
// Ativa no GitHub Pages ou com ?nuvem na URL; fora disso o site roda em modo local.
// Acesso por link individual (?c=CÓDIGO): login anônimo + convite. Nenhum e-mail é enviado.
(function () {
  'use strict';
  const CONFIG = {
    apiKey: 'AIzaSyDmoWbLH7zAP9btC6OZTjn0B6ToY2yZjT4',
    authDomain: 'crivo-pesquisa.firebaseapp.com',
    projectId: 'crivo-pesquisa',
    storageBucket: 'crivo-pesquisa.firebasestorage.app',
    messagingSenderId: '630175893564',
    appId: '1:630175893564:web:6283d01c589e3b7ba65b39',
  };
  const BASE = 'https://www.gstatic.com/firebasejs/10.14.1/';
  const CHAVE_CODIGO = 'crivo-codigo';
  const params = new URLSearchParams(location.search);
  const ativo = /\.github\.io$/.test(location.hostname) || params.has('nuvem');

  let F = null, db = null, codigo = null, espera = null, ultimoEstado = null, ultimoEnviado = null;
  const erro = (c) => Object.assign(new Error(c), { codigo: c });
  const status = (t) => { const el = document.getElementById('status-nuvem'); if (el) el.textContent = t; };

  async function carregarSdk() {
    const [app, auth, fs] = await Promise.all([import(BASE + 'firebase-app.js'), import(BASE + 'firebase-auth.js'), import(BASE + 'firebase-firestore.js')]);
    return { app, auth, fs };
  }

  async function iniciar() {
    const sdk = await carregarSdk();
    F = sdk.fs;
    const app = sdk.app.initializeApp(CONFIG);
    db = F.getFirestore(app);
    let guardado = null;
    try { guardado = localStorage.getItem(CHAVE_CODIGO); } catch (e) { /* sem armazenamento */ }
    codigo = (params.get('c') || guardado || '').trim();
    if (!codigo) throw erro('sem_codigo');
    const cred = await sdk.auth.signInAnonymously(sdk.auth.getAuth(app));
    const uid = cred.user.uid;
    const refConvite = F.doc(db, 'convidados', codigo);
    const convite = await F.getDoc(refConvite).catch(() => null);
    if (!convite || !convite.exists()) throw erro('convite_invalido');
    try { localStorage.setItem(CHAVE_CODIGO, codigo); } catch (e) { /* sem armazenamento */ }
    const lote = F.writeBatch(db);
    if (convite.data().uid !== uid) lote.update(refConvite, { uid });
    lote.set(F.doc(db, 'acessos', uid), { codigo, em: F.serverTimestamp() });
    await lote.commit();
    const casos = (await F.getDocs(F.query(F.collection(db, 'casos'), F.orderBy('ordem')))).docs.map((d) => d.data());
    const resp = await F.getDoc(F.doc(db, 'respostas', codigo));
    status('Salvo na nuvem');
    return { casos, estado: resp.exists() ? resp.data().estado : null, convite: convite.data() };
  }

  async function gravar() {
    if (!db || !ultimoEstado) return;
    const texto = JSON.stringify(ultimoEstado);
    if (texto === ultimoEnviado) return;
    const estado = JSON.parse(texto);
    try {
      await F.setDoc(F.doc(db, 'respostas', codigo), { codigo, estado, atualizadoEm: F.serverTimestamp() });
      ultimoEnviado = texto;
      status('Salvo na nuvem às ' + new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }));
    } catch (e) {
      status('Sem conexão: as respostas ficam guardadas e serão enviadas depois');
    }
  }
  // Grava no máximo a cada 3 segundos; ao sair da página, grava na hora.
  function salvar(estado, imediato) {
    if (!db) return;
    ultimoEstado = estado;
    clearTimeout(espera);
    if (imediato) gravar(); else espera = setTimeout(gravar, 3000);
  }

  window.crivoNuvem = { ativo, iniciar, salvar };
})();
