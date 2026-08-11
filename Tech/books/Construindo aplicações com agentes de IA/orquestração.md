---
title: Orquestração
book: Construindo aplicações com agentes de IA
emoji: 🤖
category: livro
tema: IA
layout: post
capa: assets/construindo_aplicacoes_com_agentes_de_IA.png
order: 5
---

Um dos capítulos que julgo mais interessantes pois lembra muito o que me motivou a começar. Me recordo que o meu primeiro projeto em que procurei resolver algum problema com agentes de IA foi de automatizar a metodologia SCRUM por meio de um time de agentes, aonde tinhamos um agente orquestrador, um agente product owner e agent_analista. A ideia era que o orquestrador trabalhasse como um project manager, então ao subir o escopo do projeto ele deveria distribuir as tarefas para os dois agents restantes. Enquanto o agent analista executava as tarefas, o Product owner tinha o trabalho de criar o cronograma, alimentar o dash e ir monitorando as entregas das sprints. No fim, foi um time de agentes "básico" que poderia ter sido maior e mais funcional, mas na época estava começando e os tokens eram limitados. 

Falando sobre a orquestração, hoje eu entendo que ela vai muito além de um agente distribuir as tarefas para os demais. Ela tem o papel de definir: Quais ferramentas serão utilizadas, em quais momentos e também de construir o contexto correto para cada chamada de modelo. 

![orquestração](https://raw.githubusercontent.com/renansogura/ai-engineering-blog/main/assets/orquestracao-agente.png)

Nesse ponto, o livro busca apresentar alguns tipos de agentes. Já vimos em capítulos anteriores mas dessa vez a discussão é mais aprofundada. A mensagem principal que ele tenta trazer é que um agente é um agente, mas que podem ter abordagens diferentes em termos de raciocínio, planejamento e ação. 

**1. Agente ReAct:**

Trata-se de um agente que busca intercalar o Reasoning(Raciocínio) e Act(ação) em um loop iterativo. Em poucas palavras, o modelo pensa, identifica o que precisa ser feito, invoca as ferramentas necessárias e executa. Em seguida avalia o resultado e repete o loop se necessário. Mas você deve estar se perguntando: Qual a vantagem desse agente? Na minha interpretação a grande vantagem que temos com esse agente é que tem um potencial muito poderoso em conseguir quebrar uma task complexa em partes menores que são gerenciáveis. Normalmente precisariamos de mais de um agente para isso, no entanto, em muitos cenários não vamos conseguir controlar 100% os inputs e para isso esse agente vai muito bem, pois ele mesmo é capaz de atualizar o plano. O Agente ReAct é excelente para cenários exploratórios, como por exemplo, para uma análise de dados com mútliplas fontes que demandam capacidade de adaptação por parte do agente. 

**2. Agentes de planejamento e execução:**

Basicamente esse tipo de agente segue o que o próprio nome sugere, tal que ele possui 2 fases: A primeira fase de planejamento na qual o modelo cria um plano com múltiplas etapas, e, em seguida, cada etapa planejada é executada por meio de chamadas de ferramentas. Por mais batido que pareça, esse agente traz uma funcionalidade bastante interessante: Ao realizar essa separação clara, o planejador consegue se concentrar no raciocínio de longo prazo, enquanto os executores se concentram em chamar apenas as ferramentas necessárias para a tarefa em específico. Qual a vantagem? Reduz as chamadas redundantes a LLM, pois agora a decomposição é clara. Outro ponto interessante é com relação aos resultados, como o plano é claro e bem desenhado conseguimos monitorar de uma maneira mais fácil como os agentes estão trabalhando, quais ferramentas estão chamando em cada tarefa, quais erros acontecem e qual o motivo de ocorrem.

Nesse ponto gostaria de pontuar uma observação: os agentes de planejamento e execução revela uma estratégia muito valiosa e que tenho aplicado no meu dia a dia. A etapa de execução requer menos contexto e um número menor de chamadas da LLM, nesse sentido, podemos utilizar modelos menores para essa etapa. Por outro lado, a etapa de planejamento precisa de mais contexto, e, para isso requer modelos maiores. Com isso, uma boa prática é aplicar modelos maiores, como por exemplo, Claude Opus 5 - high ou Claude Fable se estiver disponível. Já para etapas de execução, como já temos o caminho desenhado e as ferramentas definidas podemos aplicar modelos menos robustos como Claude Sonnet 5 ou Claude Opus - low a depender da necessidade. Em outro tópico podemos falar mais sobre os modelos mas para a etapa de execução o "thinking" é menor e precisamos de agilidade na execução, devido a isso, esses modelos fazem mais sentido. 

**Seleção de ferramentas:**

A seleção de ferramentas é a base para um planejamento mais avançado. Basicamente temos 3 estratégias para a seleção de ferramentas: 

**1. Seleção padrão de ferramentas:**

Trata-se de uma abordagem mais simples de implementar e não requer treinamento adicional. Nessa abordagem, o agente decide qual ferramenta usar, quando usar e quais os parâmetros, dado o contexto da tarefa. Na prática, imagine que o modelo recebe uma lista de ferramentas disponíveis com suas descrições, e, com base no prompt do usuário ele escolhe a ferramenta mais adequada para a tarefa. O problema dessa estratégia é que ela se limita a forma como vc descreve cada funcionalidade da ferramenta. Portanto, pense no exemplo de uma calculadora que cálcula o imposto. Se a fórmula de calcular o imposto mudar, o modelo não vai conseguir chamar a função. 

**2. Seleção semântica de ferramentas:**

Essa estratégia utiliza representações semânticas para indexar todas as ferramentas disponíveis e busca semântica para recuperar as ferramentas mais relevantes. Com isso, reduz o número de ferramentas a serem escolhidas e, em seguida, o modelo seleciona a ferramenta com o maior valor semântico e os parâmetros para a tarefa. Um agente pode ter dezenas ou centenas de ferramentas disponíveis, se colocarmos no contexto ao mesmo tempo vamos consumir muitos tokens, sendo que a maioria seria desnecessário. Além disso, ao disponibilizar muitas ferramentas para o modelo, pode gerar uma certa confusão e ocasionar na seleção da ferramenta errada. Nesse contexto, a seleção semântica passa a ser uma estratégia interessante: O usuário envia uma consulta, essa consulta é convertida em um embedding e esse vetor é comparado com os embedding das descrições de cada ferramenta, por fim, levantamos um top-k e escolhemos as ferramentas com maior similaridade semântica. Sendo assim, apenas as ferramentas selecionadas semânticamente são enviadas ao modelo, que ao invés de selecionar um par de ferramentas em centenas disponíveis, ele escolhe a partir do que apenas foi enviado para ele. Entenda isso como se fosse um filtro para reduzir o consumo de tokens e a latência do modelo. 

**Seleção hierárquica de ferramentas:**

Existem cenários em que há um grande número de ferramentas disponíveis e para esses casos pode ser conveniente considerar a seleção hierárquica de ferramentas. Mas se você entendeu a discussão até aqui deve estar se perguntando: Então por qual motivo não consideramos a seleção semântica de ferramentas? E a resposta parece mais simples do que se imagina: E se os valores semânticos forem muito próximos? Se definirmos um score de confiança superior e 0.95 e um top-k de 5 e tivermos 300 ferramentas com um score maior que o corte? Você concorda que não estaremos reduzindo a carga de forma muito significativa para a LLM? É nesse ponto que essa estratégia ataca!

Seguindo, como podemos resolver? essa estratégia busca organizar as ferramentas em camadas ou categorias e o agente navega por essa hierarquia em etapas. Primeiro ele escolhe a categoria e depois a ferramenta dentro dela. Nesse contexto, podemos pensar no seguinte fluxo de trabalho do agente: Ao receber o prompt do usuário, o primeiro passo é identificar a categoria. Em seguida, dentro da categoria o agente deve identificar o grupo e, por fim, o seleciona a ferramenta específica e executa os parâmetros corretos. Um jeito prático de entender é pensar em uma árvore de problemas, mas ao invés de problemas termos ferramentas. Uma vez que você define a categoria que você quer buscar a ferramenta as demais árvores deixam de ser relevantes para essa consulta. É uma forma de limitar o campo de atuação do agente sempre que os valores semânticos forem muito próximos. 

**Execução de ferramentas:**

A parametrização é o processo de configurar os parâmetros que guiarão a execução de uma ferramenta em um modelo. Sem os parâmetros, a ferramenta não sabe o que fazer. Sendo assim, o modelo lê a conversa ou o prompt do usuário e entende a intenção do usuário, extraindo ou inferindo os parâmetros necessários. 

Vamos quebrar a execução de ferramentas em 4 categorias de estudo. dentre elas, temos:

**1. Execução de ferramenta única:**

Essa categoria é a mais básica pois ela exige exatamente uma única ferramenta. Para esse cenário, o modelo precisa escolher a ferramenta mais adequada para realizar a tarefa. Uma vez que a ferramenta é selecionada, ela deve ser parametrizada seguindo sua definição. A ferramenta é executada e sua saída é utilizada como entrada para compor a resposta final para o usuário. 

![Fluxo de execução de ferramenta única](https://raw.githubusercontent.com/renansogura/ai-engineering-blog/main/assets/ferramenta-unica.png)

Na imagem acima conseguimos conferir como é o fluxo de execução de ferramenta única. Primeiro a consulta do usuário é passada para o modelo, o modelo seleciona as ferramentas que são mais apropriadas para o contexto, os campos são parametrizados e, por fim, devolve a resposta final para o usuário. 

**2. Execução paralela de ferramentas:**

Uma das estratégias que mais tenho utilizado no meu dia. O motivo é relativamente simples: Imagine que você precise realizar consultas a banco de dados diferentes e para cada banco você precise de uma ferramenta. Se você executar uma por uma, conseguimos chegar no consenso que a tarefa vai demorar muito? É nesse ponto que o paralelismo entra. Como são tarefas independentes, eu posso executar em paralelo para acelerar o resultado final da minha consulta. Nessa estratégia o modelo ao invés de gerar uma chamada por vez, ele emite várias chamadas em uma única tacada só. O fluxo seria da seguinte forma: O modelo recebe a consulta do usuário, identifica as chamadas independentes entre si e executa as ferramentas ao mesma tempo. 

Um cenário em que não faria sentido aplicar essa estratégia seria realizarmos uma consulta que depende do ID do usuário. Portanto, se não houver o ID não consegue acessar nenhum banco. Logo, a primeira etapa precisa ser entrar no sistema com o ID e depois seguir o fluxo de trabalho. 

**3. Cadeias (Chains):**

Essa estratégia se refere a sequência de ações que são executadas uma após a outra, de tal modo, que a etapa seguinte depende do resultado anterior para iniciar. Para nossa felicidade existe uma biblioteca no python chamada LangChain que facilita a construção das cadeias por meio de funções como invoke(), batch() ou stream(). 

Caso você nunca tenha criado um agente utilizando o LangChain, recomendo o exercício. No começo parece algo muito complexo, mas no momento que você entende como funciona o fluxo de trabalho, o potencial do framework é revelado. 

**4. Grafos:**

Tem uma estratégia muito parecida com a da cadeia no sentido de respeitar o fluxo de trabalho. No entanto, e se no nosso fluxo de trabalho chegarmos em um ponto em que temos mais de uma possibilidade como resposta? Se você encontrou um ponto de decisão no seu fluxo, o correto é trabalhar com grafos. Também para nossa sorte, há o LangGraph para lidar com esse cenário. Nunca trabalhei com ele, mas imagino que deve seguir a mesma lógica de trabalho do LangChain. 

Os grafos permitem ramificar, mesclar e consolidar várias execuções de ferrametnas em um processo unificado. Porém, nem tudo são flores. Essas ramificações adicionais automaticamente implicam em mais chamadas a LLM. 

Muitas vezes não sabemos se devemos trabalhar com grafos ou cadeias. Uma boa prática para chegar nessa resposta é primeiro começar com o fluxo de trabalho linear, se em algum momento realmente tiver a necessidade de criar uma decisão ai você já sabe que precisa ir pelo caminho dos grafos. Existem muitas ferramentas de apoio para desenhar fluxos de trabalho, como por exemplo, Mermaid, draw.io e etc. Mas sendo bem sincero, **papel e caneta** resolvem muito bem esse trabalho. 
