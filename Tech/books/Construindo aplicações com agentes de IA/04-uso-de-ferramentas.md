---
title: Uso de ferramentas
book: Construindo aplicações com agentes de IA
emoji: 🤖
category: livro
tema: IA
layout: post
capa: assets/construindo_aplicacoes_com_agentes_de_IA.png
order: 4
---

As ferramentas são uma parte fundamental que capacitam os nosso agentes a interagir com o ambiente, executar tarefas e recuperar informações. Uma analogia para esclarecer esse ponto é pensar em um médico, para que ele consiga ter o diagnótico correto ele precisa que o paciente realize uma bateria de exames. O mesmo acontece para os agentes, eles precisam de ferramentas para lidar com várias tarefas de forma eficaz. 

Temos os seguintes tipos de ferramentas:

**1.Ferramentas locais:**

Como o próprio nome diz, são ferramentas desenhadas para serem executadas localmente. Costumam ser implementadas junto com os agentes para complementar tarefas em que os modelos de linguagem possuem deficiências, como por exemplo: aritmética, operações com calendários, fuso-horário ou até mesmo interações com mapas. 

No entanto, as ferramentas locais tem algumas desvantagens que vale a pena destacar: A construção de ferramentais locais é um processo trabalhoso e complexo. Além disso, o compartilhamento entre locais diferentes é ainda mais desafiador. Existe uma saída que é transformar as ferramentas em bibliotecas e compartilhá-las entre vários agentes, contudo a prática pode ser bastante complexa. 

A manutenção também é complexa, a medida que surgem atualizações a ferramenta local também precisa ser atualizada. Esse processo normalmente costuma consumir uma quantidade de recurso considerável. 

**2.Ferramentas baseadas em API:**

As ferramentas baseadas em API permitem que os agentes consigam interagir com o ambiente externo, tal que, consigam se comunicar com ambientes públicos ou privados. Utilizar ferramentas baseadas em API é uma grande arma quando precisamos que nossos agentes consigam recuperar dados em tempo real. Para entender como funciona na prática, eu gosto do seguinte exemplo: Imagine que você trabalhe com a bolsa de valores e está focado em uma ação em específico. Existem inúmeras estratégias que você pode adotar para avaliar o comportamento e um deles é construir uma série temporal aonde temos uma comparação entre comportamento real vs comportamento esperado em função do tempo. Para esse cenário, podemos aplicar um agente para explorar duas frentes: A primeira é que ele consiga recuperar os dados em tempo real na web e popular o seu gráfico, e, a outra frente seria ele realizar buscas na web para levantar dados de como está a situação da empresa naquele dado momento e indicar o comportamento esperado para os próximos dias. Sendo assim, conseguimos ter uma ideia se vale a pena vender as ações ou comprar mais. Claro que não é uma ideia simples e a execução é complexa pois precisamos assumir uma série de premissas para validar o nosso modelo, mas meu objetivo é deixar claro como trabalhar com ferramentas baseadas em API.

**3. MCP:**

Um dos grandes "xodós" do momento. Brinco que ele é como se fosse a evolução da API, onde a Anthropic introduziu um meio que fornece uma maneira uniforme e independente do modelo de conectar a LLM ao ambiente externo, é como se fosse a porta usb-c para a IA. Ainda não tive a oportunidade de trabalhar com ele, mas quando tiver a experiência volto para detalhar essa parte ou quem sabe construir um capítulo inteiro na aba de ferramentas - Claude desse blog. 

Trata-se de um capítulo com muitas páginas de código que mostram como essas integrações via API ou MCP são feitas, portanto, não vou entrar muito no detalhe. Mas se você tem como objetivo permitir que o seu agente interaja com ambientes externos para coletar dados ou analisar tendências pode-se dizer que são ferramentas muito poderosas.


