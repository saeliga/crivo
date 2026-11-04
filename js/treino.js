// Módulos do treinamento autoinstrucional do CRIVO-PE.
// Texto do pesquisador; sem títulos da NANDA-I, da NOC ou da NIC (direitos autorais).
// O caso guiado, com gabarito comentado, vem junto com os casos (campo treino: true).
// O módulo 2 segue as orientações de uso da EADE-2 enviadas pelas autoras
// (Matos; Cruz), com autorização para uso nesta pesquisa.
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
    titulo: 'Parte 1: diagnósticos e EADE-2',
    minutos: 12,
    html: `
      <p>A Parte 1 é respondida para <strong>todos</strong> os diagnósticos sugeridos. O item 1.1 é a Escala de Acurácia de Diagnóstico de Enfermagem, versão 2 (EADE-2), aplicada na íntegra, conforme as orientações de uso das autoras (Matos; Cruz). O item 1.2 é próprio do CRIVO-PE.</p>
      <h3>O que a EADE-2 mede</h3>
      <p>O grau com que um diagnóstico tem sustentação no conjunto de informações clínicas escritas do paciente. A acurácia é o grau de relevância, especificidade e coerência das pistas existentes para o diagnóstico. Para usar bem a escala, é preciso ter claros estes conceitos:</p>
      <ul>
        <li><strong>Pistas:</strong> manifestações do paciente que representam indícios, vestígios, ou sinais e sintomas do diagnóstico avaliado.</li>
        <li><strong>Relevância da pista:</strong> grau com que uma pista (ou um conjunto de pistas) é necessária para indicar o diagnóstico.</li>
        <li><strong>Especificidade da pista:</strong> grau com que uma pista (ou um conjunto de pistas) é característica do diagnóstico.</li>
        <li><strong>Coerência da pista:</strong> grau com que uma pista (ou um conjunto de pistas) é consistente com o diagnóstico e com o conjunto das informações disponíveis.</li>
      </ul>
      <h3>Como aplicar</h3>
      <ol>
        <li><strong>Antes</strong> de julgar, leia com cuidado todo o resumo clínico.</li>
        <li>Depois, submeta <strong>cada</strong> diagnóstico à escala, diante do conjunto dos dados. Volte ao resumo sempre que precisar.</li>
        <li>Consulte a <strong>NANDA-I</strong> sempre que necessário. Tenha a sua à mão: a plataforma não traz a classificação.</li>
      </ol>
      <div class="tabela-rolagem"><table class="resumo-t">
        <thead><tr><th>Item</th><th>Pergunta</th><th>Respostas</th><th>Orientação</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>Há pista(s) para o diagnóstico?</td><td>Sim · Não</td><td>Se houver pelo menos uma pista, independente da relevância, especificidade e coerência, marque sim. Se não, os outros itens não se aplicam: a escala termina aqui para esse diagnóstico.</td></tr>
          <tr><td>2</td><td>A relevância da(s) pista(s) existente(s) é:</td><td>Alta/Moderada · Baixa</td><td rowspan="3">Se houver pistas nos dois graus, indique apenas o mais elevado (Alta/Moderada).</td></tr>
          <tr><td>3</td><td>A especificidade da(s) pista(s) existente(s) é:</td><td>Alta/Moderada · Baixa</td></tr>
          <tr><td>4</td><td>A coerência da(s) pista(s) existente(s) é:</td><td>Alta/Moderada · Baixa</td></tr>
          <tr><td>5</td><td>Você manteria esse diagnóstico?</td><td>Sim · Não</td><td>Mesmo com pistas, responda não se o diagnóstico não for prioritário para a situação do paciente, não direcionar intervenções adequadas ou se outro diagnóstico explicar melhor a resposta do paciente. Não pontua.</td></tr>
        </tbody></table></div>
      <h3>Escore e categoria</h3>
      <p>A plataforma calcula sozinha. Item 1 sim vale 1; alta/moderada vale 1 no item 2, 3,5 no item 3 e 8 no item 4; baixa vale 0.</p>
      <div class="tabela-rolagem"><table class="resumo-t">
        <thead><tr><th>Escore</th><th>Categoria</th><th>Interpretação</th></tr></thead>
        <tbody>
          <tr><td>0</td><td>Nula</td><td>Não há pistas que indiquem o diagnóstico.</td></tr>
          <tr><td>1</td><td>Baixa</td><td>As pistas existentes têm baixa relevância, baixa especificidade e baixa coerência.</td></tr>
          <tr><td>2; 4,5; 5,5</td><td>Moderada</td><td>Coerência baixa com os dados, mas pistas de relevância e/ou especificidade alta ou moderada.</td></tr>
          <tr><td>9; 10; 12,5; 13,5</td><td>Alta</td><td>Pistas de coerência alta ou moderada com os dados, e também de relevância e/ou especificidade alta ou moderada.</td></tr>
        </tbody></table></div>
      <p>Na prática, a <strong>coerência</strong> separa a acurácia alta das demais, e a <strong>presença</strong> de pista separa a nula da baixa.</p>
      <p>A classificação é sobre <strong>as pistas do caso</strong>, não sobre as evidências que a IA escolheu. Se a IA listou uma evidência errada, mas o caso tem outras pistas boas, a acurácia pode continuar alta.</p>
      <h3>1.2 Evidência por evidência (CRIVO-PE)</h3>
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
      { k: 'm2q4', item: 'EADE-2, item 1 · Há pista(s) para o diagnóstico?', perg: 'O caso tem uma única pista para o diagnóstico, pouco relevante, pouco específica e contradita pelos demais dados. Qual a categoria de acurácia?',
        ops: ['Nula', 'Baixa', 'Moderada'], certo: 1,
        exp: 'Há pista, então o item 1 é sim e o escore é 1: acurácia baixa. Nula é só quando não há pista alguma.' },
      { k: 'm2q5', item: 'EADE-2, item 3 · A especificidade da(s) pista(s) existente(s) é:', perg: 'Entre as pistas do caso, uma é muito característica do diagnóstico e as outras são pouco características. O que marcar?',
        ops: ['Alta/Moderada', 'Baixa'], certo: 0,
        exp: 'Se houver pistas nos dois graus, indique apenas o mais elevado.' },
      { k: 'm2q6', item: 'EADE-2, item 4 · A coerência da(s) pista(s) existente(s) é:', perg: 'As pistas são relevantes e específicas, mas outros dados do resumo contradizem o diagnóstico. A acurácia pode ser alta?',
        ops: ['Sim', 'Não, no máximo moderada'], certo: 1,
        exp: 'Com coerência baixa, o escore fica entre 2 e 5,5: acurácia moderada, no máximo.' },
      { k: 'm2q3', item: 'EADE-2 · acurácia do diagnóstico', perg: 'A IA indicou uma evidência que não existe no caso, mas o caso tem outras pistas relevantes, específicas e coerentes para o mesmo diagnóstico. Como fica a acurácia?',
        ops: ['Nula, porque uma evidência é falsa', 'Pode ser alta, porque a escala olha todas as pistas do caso', 'Baixa, para registrar o erro'], certo: 1,
        exp: 'O erro na evidência é registrado no 1.2. A EADE-2 classifica o diagnóstico diante de todas as pistas do caso.' },
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
        <li>Na Parte 1, os itens 2 a 5 da EADE-2 aparecem quando o item 1 é "sim". O escore e a categoria de acurácia aparecem logo abaixo, calculados pela plataforma.</li>
        <li>O <strong>relógio</strong> conta só o tempo ativo. Use "Pausar" se for interrompido; ao sair da página ele para sozinho.</li>
        <li><strong>Concluir caso</strong> só funciona com todas as respostas obrigatórias. Se faltar alguma, a plataforma leva você até ela.</li>
        <li>Tudo é salvo automaticamente. Para continuar depois, abra o mesmo link.</li>
      </ul>
      <p>A seguir vem o <strong>caso guiado</strong>: você o avalia como se fosse real e, ao concluir, vê o gabarito comentado item a item.</p>`,
    quiz: [],
  },
];
