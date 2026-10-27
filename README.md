# CRIVO-PE — plataforma de coleta

Site estático da coleta de dados do CRIVO-PE (Instrumento de avaliação crítica de planos de
enfermagem sugeridos por inteligência artificial), parte da pesquisa de mestrado do Programa de
Pós-Graduação em Enfermagem da UFRN.

Estado atual: **pré-teste**, com gravação no Firebase (projeto `crivo-pesquisa`).

- Identificação, caracterização do avaliador (níveis de expertise de Benner) e aceite do TCLE.
- Dois casos clínicos fictícios, com o plano sugerido pela IA ao lado do instrumento.
- As cinco partes do CRIVO-PE; NOC e NIC apenas nos três diagnósticos prioritários.
- Tempo ativo por caso e por parte, com pausa automática quando a página sai de foco.
- Questionário de clareza ao final e exportação das respostas em JSON.
- No GitHub Pages, as respostas são gravadas no Firestore (região São Paulo). Fora dele, o site roda
  em modo local, só no navegador.

## Como funciona o acesso

- Cada avaliador recebe um **link individual** (`?c=CÓDIGO`), criado na página `admin.html`.
- O site entra com login anônimo e vincula o código à sessão; o código é a credencial. Nenhum e-mail
  é enviado (o plano gratuito do Firebase limita e-mails de login a 5 por dia).
- Cada avaliador lê e grava só as próprias respostas. Os casos só são lidos por quem tem convite.
- Só o pesquisador (conta Google definida em `firestore.rules` e `admin.html`) cria convites, carrega
  os casos e exporta os dados em JSON e CSV.

## Configuração do Firebase (uma vez)

1. Authentication › Sign-in method: ativar **Anônimo** e **Google**.
2. Authentication › Configurações › Domínios autorizados: incluir `saeliga.github.io`.
3. Firestore › Regras: colar o conteúdo de `firestore.rules` e publicar.
4. Abrir `admin.html`, entrar com a conta do pesquisador e carregar `casos.json`.

## Casos e direitos autorais

Os casos reais usam títulos da NANDA-I, da NOC e da NIC, protegidos por direitos autorais, e ficam
em `casos.js`, fora do repositório (`.gitignore`). O repositório traz só `casos.exemplo.js`, com
títulos genéricos. Para rodar localmente, copie `casos.exemplo.js` para `casos.js`.

## Rodar

Qualquer servidor estático, por exemplo `python3 -m http.server`, e abrir `http://localhost:8000`.
