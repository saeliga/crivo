# CRIVO-PE — plataforma de coleta

Site estático da coleta de dados do CRIVO-PE (Instrumento de avaliação crítica de planos de
enfermagem sugeridos por inteligência artificial), parte da pesquisa de mestrado do Programa de
Pós-Graduação em Enfermagem da UFRN.

Estado atual: **protótipo do pré-teste**, para ajuste de layout.

- Identificação, caracterização do avaliador (níveis de expertise de Benner) e aceite do TCLE.
- Dois casos clínicos fictícios, com o plano sugerido pela IA ao lado do instrumento.
- As cinco partes do CRIVO-PE; NOC e NIC apenas nos três diagnósticos prioritários.
- Tempo ativo por caso e por parte, com pausa automática quando a página sai de foco.
- Questionário de clareza ao final e exportação das respostas em JSON.
- As respostas ficam só no navegador (localStorage). A gravação em base própria vem depois.

## Casos e direitos autorais

Os casos reais usam títulos da NANDA-I, da NOC e da NIC, protegidos por direitos autorais, e ficam
em `casos.js`, fora do repositório (`.gitignore`). O repositório traz só `casos.exemplo.js`, com
títulos genéricos. Para rodar localmente, copie `casos.exemplo.js` para `casos.js`.

## Rodar

Qualquer servidor estático, por exemplo `python3 -m http.server`, e abrir `http://localhost:8000`.
