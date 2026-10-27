// Exemplo da estrutura dos casos do pré-teste, com títulos genéricos.
// Os casos reais usam títulos da NANDA-I, da NOC e da NIC (direitos autorais) e
// ficam em casos.js, fora do repositório público (ver .gitignore).
// Para rodar localmente: copie este arquivo para casos.js e preencha.
window.CRIVO_CASOS = [
  {
    id: 'caso1',
    titulo: 'Caso 1',
    subtitulo: 'Exemplo de caso',
    resumo: 'Resumo clínico fictício, sem identificação, como a IA o recebe.',
    diagnosticos: [
      { id: 'd1', prioridade: 1, titulo: 'Diagnóstico de exemplo A', categoria: 'Com foco no problema', justificativa: 'Justificativa escrita pela IA.', evidencias: ['Evidência 1', 'Evidência 2'],
        noc: ['Resultado de exemplo 1'], nic: ['Intervenção de exemplo 1', 'Intervenção de exemplo 2'] },
      { id: 'd2', prioridade: 2, titulo: 'Diagnóstico de exemplo B', categoria: 'Potencial para deteriorar', justificativa: 'Justificativa escrita pela IA.', evidencias: ['Fator de risco 1'],
        noc: ['Resultado de exemplo 2'], nic: ['Intervenção de exemplo 3'] },
      { id: 'd3', prioridade: 3, titulo: 'Diagnóstico de exemplo C', categoria: 'Com foco no problema', justificativa: 'Justificativa escrita pela IA.', evidencias: ['Evidência 3'],
        noc: ['Resultado de exemplo 3'], nic: ['Intervenção de exemplo 4'] },
      { id: 'd4', prioridade: 4, titulo: 'Diagnóstico de exemplo D', categoria: 'Potencial para deteriorar', justificativa: 'Justificativa escrita pela IA.', evidencias: ['Fator de risco 2'] },
    ],
  },
  {
    id: 'treino',
    treino: true,
    titulo: 'Caso guiado',
    subtitulo: 'Exemplo de caso de treino',
    resumo: 'Resumo clínico fictício do caso de treino.',
    diagnosticos: [
      { id: 'd1', prioridade: 1, titulo: 'Diagnóstico de exemplo A', categoria: 'Com foco no problema', justificativa: 'Justificativa escrita pela IA.', evidencias: ['Evidência 1'],
        noc: ['Resultado de exemplo 1'], nic: ['Intervenção de exemplo 1'] },
    ],
    // Gabarito: ok = respostas esperadas; c = comentário mostrado após concluir o caso.
    gabarito: {
      'p1.d1.eade': { ok: ['alta'], c: 'Comentário do gabarito.' },
      'p1.d1.ev0': { ok: ['sim'], c: 'Comentário do gabarito.' },
    },
  },
];
