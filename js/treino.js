// Módulos do treinamento autoinstrucional do CRIVO-PE.
// Texto do pesquisador; sem títulos da NANDA-I, da NOC ou da NIC (direitos autorais).
// O caso guiado, com gabarito comentado, vem junto com os casos (campo treino: true).
// A descrição dos níveis da EADE-2 é um resumo operacional; a escala completa é a de
// Matos e Cruz (2013), usada mediante autorização das autoras.
window.CRIVO_MODULOS = [
  {
    titulo: 'Como avaliar',
    minutos: 5,
    html: `
      <p>Você vai julgar o <strong>plano sugerido pela inteligência artificial</strong> para um paciente fictício. Não é o paciente nem o enfermeiro que está em avaliação: é a sugestão da IA.</p>
      <h3>Seis regras</h3>
      <ol>
        <li><strong>Só o resumo clínico vale.</strong> Ele é tudo o que a IA recebeu. O que não está no resumo não está sustentado, mesmo que seja comum em pacientes parecidos.</li>
        <li><strong>Julgue cada sugestão por si.</strong> Um erro grave num diagnóstico não deve baixar a nota dos outros.</li>
        <li><strong>Compare número a número.</strong> Quando a IA cita um valor, confira no resumo.</li>
        <li><strong>Interpretar não é inventar.</strong> "Pós-operatório imediato" para o 1º dia de pós-operatório é interpretação; um valor de exame que não aparece no resumo é dado inventado.</li>
        <li><strong>Responda sozinho.</strong> Não consulte colegas. Se tiver dúvida sobre um item, responda como entender e anote a dúvida no comentário.</li>
        <li><strong>Pode pausar.</strong> As respostas são salvas sozinhas e o relógio para quando você sai da página.</li>
      </ol>
      <h3>Escala de 1 a 4</h3>
      <p>Os itens de julgamento não têm ponto neutro. Na análise, notas 3 e 4 contam como "pertinente".</p>
      <div class="tabela-rolagem"><table class="resumo-t">
        <thead><tr><th>Nota</th><th>Rótulo</th><th>Quando usar</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>Não pertinente</td><td>Não se aplica ao diagnóstico ou ao caso; deveria ser retirado</td></tr>
          <tr><td>2</td><td>Pouco pertinente</td><td>Tem relação fraca; precisaria de grande revisão</td></tr>
          <tr><td>3</td><td>Pertinente</td><td>Adequado, com pequeno ajuste</td></tr>
          <tr><td>4</td><td>Totalmente pertinente</td><td>Adequado como está</td></tr>
        </tbody></table></div>`,
    quiz: [
      { k: 'm1q1', perg: 'O resumo não traz glicemia. A IA indica "hiperglicemia" como evidência de um diagnóstico. Ela está sustentada?',
        ops: ['Sim, é comum em pacientes críticos', 'Não, o dado não está no resumo'], certo: 1,
        exp: 'Só o resumo vale. Um dado provável, mas ausente, não sustenta a evidência.' },
      { k: 'm1q2', perg: 'Uma intervenção é adequada ao caso, mas precisaria de um pequeno ajuste na frequência. Que nota ela recebe?',
        ops: ['2', '3', '4'], certo: 1,
        exp: 'Adequada com pequeno ajuste é 3. O 4 fica para o que está adequado como está.' },
    ],
  },
  {
    titulo: 'Parte 1: diagnósticos',
    minutos: 8,
    html: `
      <p>A Parte 1 é respondida para <strong>todos</strong> os diagnósticos sugeridos.</p>
      <h3>1.1 Acurácia pela EADE-2</h3>
      <p>A Escala de Acurácia de Diagnósticos de Enfermagem (EADE-2) olha as <strong>pistas</strong> do caso que apoiam o diagnóstico e pergunta, para elas, quatro coisas: estão <strong>presentes</strong>? São <strong>relevantes</strong>? São <strong>específicas</strong> desse diagnóstico? São <strong>coerentes</strong> com ele? A partir disso, classifique a acurácia:</p>
      <div class="tabela-rolagem"><table class="resumo-t">
        <thead><tr><th>Nível</th><th>Em resumo</th></tr></thead>
        <tbody>
          <tr><td>Alta</td><td>Há pistas no caso, relevantes, específicas e coerentes com o diagnóstico.</td></tr>
          <tr><td>Moderada</td><td>Há pistas relevantes e coerentes, mas pouco específicas: o mesmo conjunto sustentaria outro diagnóstico.</td></tr>
          <tr><td>Baixa</td><td>Há pistas, mas de pouca relevância ou especificidade, ou só em parte coerentes.</td></tr>
          <tr><td>Nula</td><td>Não há pistas no caso que sustentem o diagnóstico, ou os dados o contradizem.</td></tr>
        </tbody></table></div>
      <p>A classificação é sobre <strong>o caso</strong>, não sobre as evidências que a IA escolheu. Se a IA listou uma evidência errada, mas o caso tem outras pistas boas, a acurácia pode continuar alta.</p>
      <h3>1.2 Evidência por evidência</h3>
      <p>Para cada característica definidora, fator relacionado ou fator de risco indicado pela IA:</p>
      <ul>
        <li><strong>Sim</strong>: há no resumo um dado que a sustenta, de forma explícita ou por equivalência clínica direta (SpO<sub>2</sub> de 88% sustenta hipoxemia).</li>
        <li><strong>Não</strong>: o dado não aparece, é contradito ("sem edemas") ou exigiria supor algo além do resumo.</li>
      </ul>
      <p>Em diagnósticos de <strong>risco</strong>, as evidências são fatores de risco: o problema em si ainda não precisa estar presente.</p>`,
    quiz: [
      { k: 'm2q1', item: '1.2 · Cada evidência indicada pela IA está sustentada pelos dados do caso?', perg: 'O resumo diz "sem edemas". A IA indica "Edema" como evidência. A evidência está sustentada?',
        ops: ['Sim', 'Não'], certo: 1, exp: 'O dado é contradito pelo resumo.' },
      { k: 'm2q2', item: '1.2 · Cada evidência indicada pela IA está sustentada pelos dados do caso?', perg: 'O resumo diz "FiO2 50% e PEEP 10 para SpO2 de 93%". A IA indica "Hipoxemia" como evidência. A evidência está sustentada?',
        ops: ['Sim', 'Não'], certo: 0, exp: 'Precisar de FiO2 alta e PEEP para manter 93% é equivalência clínica direta de hipoxemia.' },
      { k: 'm2q3', item: '1.1 · Acurácia do diagnóstico pela EADE-2 (alta, moderada, baixa ou nula)', perg: 'A IA indicou uma evidência que não existe no caso, mas o caso tem outras pistas relevantes, específicas e coerentes para o mesmo diagnóstico. Como classificar a acurácia?',
        ops: ['Nula, porque uma evidência é falsa', 'Pode ser alta, porque a acurácia olha todas as pistas do caso', 'Baixa, para registrar o erro'], certo: 1,
        exp: 'O erro na evidência é registrado no 1.2. O 1.1 classifica o diagnóstico diante de todas as pistas do caso.' },
    ],
  },
  {
    titulo: 'Partes 2 a 5',
    minutos: 10,
    html: `
      <h3>Partes 2 e 3: resultados e intervenções</h3>
      <p>Só para os <strong>três diagnósticos prioritários</strong> (os três primeiros na ordem da IA). Cada pergunta separa duas coisas:</p>
      <ul>
        <li><strong>2.1 e 3.1, ligação com o diagnóstico:</strong> este resultado ou esta intervenção faz sentido para o diagnóstico sugerido? Julgue a ligação mesmo que o diagnóstico esteja errado; o erro do diagnóstico já fica na Parte 1.</li>
        <li><strong>2.2 e 3.2, adequação ao caso:</strong> faz sentido para este paciente, na UTI, com este objetivo de cuidado (curativo ou paliativo), os dispositivos que tem e as boas práticas e protocolos vigentes?</li>
        <li><strong>3.3, o conjunto:</strong> as intervenções, juntas, bastam para alcançar os resultados deste diagnóstico? Falta alguma importante?</li>
      </ul>
      <h3>Parte 4: justificativa</h3>
      <ul>
        <li><strong>4.1:</strong> o raciocínio escrito pela IA é coerente com os dados?</li>
        <li><strong>4.2:</strong> a justificativa cita algum dado que não está no caso, ou com valor diferente? Se sim, escreva qual.</li>
      </ul>
      <h3>Parte 5: o plano inteiro, uma vez por caso</h3>
      <ul>
        <li><strong>5.1:</strong> o plano cobre as necessidades humanas básicas que os dados mostram afetadas? Necessidades psicossociais e psicoespirituais não registradas no resumo não contam como falha da IA.</li>
        <li><strong>5.2 e 5.3:</strong> os diagnósticos mais importantes para as próximas 24 horas estão lá? Falta algum indispensável?</li>
        <li><strong>5.4 a 5.6:</strong> imagine o plano aceito sem revisão. Alguma sugestão poderia causar dano? Se sim, gravidade e probabilidade:</li>
      </ul>
      <div class="tabela-rolagem"><table class="resumo-t">
        <thead><tr><th>Gravidade</th><th>Definição</th></tr></thead>
        <tbody>
          <tr><td>Leve</td><td>Desconforto ou necessidade de observação, sem intervenção adicional</td></tr>
          <tr><td>Moderado</td><td>Exigiria intervenção adicional ou prolongaria a internação</td></tr>
          <tr><td>Grave</td><td>Poderia causar dano permanente, risco à vida ou óbito</td></tr>
        </tbody></table></div>
      <div class="tabela-rolagem"><table class="resumo-t">
        <thead><tr><th>Probabilidade</th><th>Definição</th></tr></thead>
        <tbody>
          <tr><td>Improvável</td><td>O dano só ocorreria em circunstâncias excepcionais</td></tr>
          <tr><td>Possível</td><td>O dano poderia ocorrer em parte dos pacientes semelhantes</td></tr>
          <tr><td>Provável</td><td>O dano ocorreria na maioria dos pacientes semelhantes</td></tr>
        </tbody></table></div>
      <ul><li><strong>5.7:</strong> o plano serve como ponto de partida para o enfermeiro elaborar o plano de cuidados?</li></ul>`,
    quiz: [
      { k: 'm3q1', item: '2.1 · Pertinente ao diagnóstico?  ·  2.2 · Pertinente ao caso (condição clínica e objetivo de cuidado)?', perg: 'Paciente em cuidado paliativo exclusivo. A IA sugere um resultado que mede recuperação funcional a longo prazo, bem ligado ao diagnóstico. Qual item deve receber nota baixa?',
        ops: ['2.1, pertinência ao diagnóstico', '2.2, pertinência ao caso'], certo: 1,
        exp: 'A ligação com o diagnóstico existe; o que não cabe é o objetivo de cuidado deste paciente.' },
      { k: 'm3q2', item: '4.2 · A justificativa menciona algum dado que não está no caso?', perg: 'A justificativa da IA cita "creatinina de 2,1 mg/dl". O resumo não traz creatinina. Qual a resposta?',
        ops: ['Sim', 'Não'], certo: 0, exp: 'É dado inventado. Escreva qual no campo que aparece.' },
      { k: 'm3q3', item: '5.1 · O plano contempla as necessidades humanas básicas afetadas que os dados do caso evidenciam?', perg: 'O resumo não registra avaliação psicológica e o plano não tem diagnóstico psicossocial. Isso conta como falha do plano nesse item?',
        ops: ['Sim', 'Não'], certo: 1, exp: 'O 5.1 julga apenas as necessidades que os dados do caso evidenciam.' },
    ],
  },
  {
    titulo: 'Uso da plataforma',
    minutos: 3,
    html: `
      <ul>
        <li>À esquerda fica o <strong>caso</strong>: o resumo clínico e o plano da IA. No computador, ele acompanha a rolagem; no celular, fica acima do instrumento.</li>
        <li>Os números nos círculos são a <strong>ordem de prioridade</strong> dada pela IA. Os três primeiros, em verde, têm NOC e NIC avaliados.</li>
        <li>À direita fica o <strong>instrumento</strong>, dividido nas cinco partes. Os botões no alto mostram quantas respostas faltam em cada parte; você pode ir e voltar livremente.</li>
        <li>O <strong>relógio</strong> conta só o tempo ativo. Use "Pausar" se for interrompido; ao sair da página ele para sozinho.</li>
        <li><strong>Concluir caso</strong> só funciona com todas as respostas obrigatórias. Se faltar alguma, a plataforma leva você até ela.</li>
        <li>Tudo é salvo automaticamente. Para continuar depois, abra o mesmo link.</li>
      </ul>
      <p>A seguir vem o <strong>caso guiado</strong>: você o avalia como se fosse real e, ao concluir, vê o gabarito comentado item a item.</p>`,
    quiz: [],
  },
];
