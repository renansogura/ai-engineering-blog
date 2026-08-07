---
title: Agents — construindo agentes
book: Claude
emoji: ✳️
category: ferramenta
tema: IA
layout: post
order: 1
---

Os Agentes de IA estão cada vez mais famosos e nesse blog é muito provável que seja o assunto de maior estudo. A ideia aqui não é ser exaustivo e explicar novamente o que é um agente, mas sim, olhar para quais as funcionalidades que o Claude traz na criação de agentes de IA. 

Em um passado não muito distante para criar um agente era necessário obter uma API_KEY de algum fornecedor e por meio de códigos .py ir estruturando o agente que é quem tem o papel de pensar e executar determinado fluxo de trabalho. O responsável por como executar a tarefa são conhecidos como skills que serão abordados em outro arquivo .md dentro da pasta Claude desse repositório. 

As boas notícias são que ao criar agentes via Claude Code não é mais necessário obter uma API_KEY e muito menos escrever códigos em python. 

**Como configurar o agente?**

O processo de construção de um agente não é muito diferente do que faziamos antes. Primeiro deve ser criado uma pasta agents/ e dentro dessa pasta o nome-agent.md. Em seguida, deverá ser determinado o frontmatter que é como se fosse um resumo indicando qual o nome do seu agente, o seu papel ou até mesmo o modelo que o agente deve utilizar para executar o fluxo de trabalho. 

Além disso, é necessário apontar dentro do agente qual o fluxo de trabalho que ele deve executar, em caso de multiagent systems declarar se trata-se de um orquestrador, caso positivo, deixar explícito o seu comportamento (proativo, reativo...). Deve-se declarar as tools que são utilizadas também. 

Dentro das funções dos agents no claude existe uma função muito interessante que se chama subagents. Pense como se fossem funcionários que só conseguem executar tarefas simples mas que ao concentrar apenas em um agente demandaria muito tempo de execução. Existem estratégias para sua aplicação, como por exemplo, paralelismo, onde o cada subagent recebe a demanda do agent e executa em paralelo ao outro subagent. Essa aplicação é recomendável quando as tarefas são independentes, como por exemplo, você recebe uma base de spend e precisa classificá-la. Dependendo do tamanho da base, um único agent pode demorar muito tempo para concluir a tarefa, mas se temos um .csv de 500 linhas, podemos criar 5 subagents em que cada um classifica 100 linhas em paralelo e entrega para o agent orquestrador já preenchido. Vc consegue sentir que é como se o tempo de execução tivesse diminuído 1/5 do que era esperado? O objetivo é exatamente esse, quebrar o problema em partes menores e juntar o resultado final, pois não são dependentes entre si. 

Outra estratégia para o subagents seria executar um fluxo de trabalho, então você possui tarefas dependentes mas que deixar tudo em um único agent pode ser muito confuso, pois cada tarefa possui sua distinção. Nesse caso, faz sentido ter subagents adaptados para esse fluxo de trabalho. 

**Desvantagem do subagent**

Nem tudo são flores, apesar de ajudar muito em quebrar a complexidade e tempo de execução, eles podem aumentar consideravelmente o consumo de tokens, pois a sua inicialização, orquestração e passagem de informação inicial demandam custo operacional. Portanto, é importante validar o custo vs benefício para determinar se é necessário criar subagents, ou melhor, quantos subagents serão criados. Uma estratégia que tenho testado seria a de deixar o agente orquestrador criar quantos subagents ele achar necessário otimizando o consumo de tokens. 

O universo de agentes no Claude é muito vasto, e tem sido incrível explorar as suas funcionalidades. Confesso que muitas vezes começo a trabalhar de manhã e quando paro para descansar já acabou o dia. Nesse momento começo a ficar preocupado e tudo fica pior quando vejo que bati 200 doláres de consumo, mas faz parte do jogo e do aprendizado. 
