---
title: Introdução aos agentes
book: Construindo aplicações com agentes de IA
emoji: 🤖
category: livro
order: 1
---

**INTRODUÇÃO AOS AGENTES DE IA**

Vivemos em um mundo de constante mudanças e certamente um dos grandes players responsáveis por esse cenário é a IA. 
Quando olhamos os períodos de maior avanço tecnológico, podemos notar alguns comportamentos em comum, e, uma observação importante é que não estou aqui para discutir qualquer previsão mas sim o comportamento.
Historicamente as guerras foram os maiores catalisadores do avanço tecnológico, pois a urgência forçava essa realidade. Podemos avaliar esse comportamento com uma reta crescente ou até mesmo com um pico de crescimento em determinado período.

Sabendo desse cenário fica a dúvida: Será que estamos presenciando um pico? Ou talvez um progresso constante? A minha visão é que não estamos em nenhum dos dois cenários, mas sim em um avanço tecnológico exponencial em que não sabemos o seu limite. 

Um ponto importante é que o livro não traz essa discussão e o motivo de eu colocar o assunto em pauta é que desde o início em que passei a me interessar pelo tema foi que eu considero importante entender o que está em jogo e que a tecnologia se utilizada sem a consciência de seus impactos pode ir contra os meus valores. 

Lembro que iniciei a minha jornada de aprendizado em IA na faculdade quando decidi junto a um grupo de amigos fundar uma organização estudantil na faculdade sobre Data Science em 2023. 
Nesse ambiente procurávamos explorar técnicas de aprendizado supervisionado e não supervisionado para criar modelos de predição utilizando o sickit-learn. 
Posteriormente passamos a explorar as redes neurais até que em 2022 tivémos o "boom" do ChatGPT, e, 
a partir desse momento tudo mudou, o que antes era visto como apenas um chat de consulta, passou a ser uma ferramenta de estudo e hoje, em, 2026, é uma ferramenta de trabalho.
Podemos discutir em um outro momento se essas mudanças rápidas foram boas ou não, mas o fato é que tivemos que nos adaptar
de maneira acelerada e posso afirmar que dificilmente consigo imaginar meu dia sem um agente de IA.

**O que são agentes de IA?**

Finalmente entrando no livro, vamos definir um agente de IA como um sistema inteligente que é projetado para analisar dados, interpretar os dados e tomar decisões respeitando o contexto.
Complexo né? Mas no fim, vamos entender como se fosse o gênio da nossa geração, ou o grande funcionário que consegue processar informações e realizar tarefas em altíssima velocidade.

Existem vários tipos de agentes, dentre eles: 

**1. Agentes de negócios:** Normalmente são aqueles que automatizam fluxos de trabalho em contexto empresarial que geram relatórios que antes um analista poderia demorar horas para executar.

**2. Agentes de desenvolvimento:** O claude code e o Codex são grandes exemplos, então aqui temos agentes que constroem códigos com base nas suas instruções.

Citei apenas alguns exemplos de agentes que temos mas existem outros que atendem diferentes necessidades. 

**Boas práticas para a construção de agentes**

Um bom agente deve atender alguns pré-requisitos(obs: Não significa que se não atender não vai ser bom, o importante é gerar valor para quem for utilizar!) 

**1.Escalabilidade:** É importante que o seu agente seja capaz de lidar com cargas de trabalho cada vez maiores e tarefas das mais diversas possíveis.

**2.Modularidade:** Projete o seu agente com componentes que são independentes mas que sejam intercambiáveis. Essa abordagem se aplicada da forma correta pode simplificar a manutenção por exemplo.

**3.Aprendizado contínuo:** Faça com que seu agente seja capaz de aprender com a experiência que ele adquire. Integre o feedback no fluxo do agente para refinar o seu comportamento. 

**4. Resiliência:** Um dos pontos mais cruciais mas que eu tive maior dificuldade pois é necessário ter uma visão de sistema. Projete o seu agente para saber lidar com erros e **ameaças contra segurança**

**Sucesso na construção do agente**

Um agente apesar de complexo ele continua sendo um modelo estatístico que é treinado para reconhecer padrões. No entanto, isso não significa que precisamos limitar ele a tarefas repetitivas 
conhecendo apenas suas entradas e saídas, e, para ser honesto para esse tipo de situação seria mais interessante construir uma automação, visto que nõ consumo de tokens e o tempo de resposta de um script 
é infinitamente mais rápido. 

A ideia com esse bloco é incentivar que as equipes testem os modelos, arquiteturas e fluxos de trabalho disponíveis. O objetivo é explorar a criatividade de uma LLM e não travá-la a perguntas e respostas. 

**Frameworks agênticos:**

Pense em um framework como se fosse uma ferramenta que busca facilitar a construção dos agentes. Cada uma possui seus prós e contras. Podemos citar o LangChain, LangGraph, Autogen e o CrewAI. 
Em minha experiência tive a oportunidade de trabalhar com o Langchain em que seguimos a teoria dos grafos e construímos um fluxo de trabalho em que encadeamos o passo a passo.
Além disso, trabalhei também com o CrewAI devido ao seu ponto forte na construção de equipes de agentes, onde a criatividade é o limite, com essa ferramenta
construi aplicações que automatizavam o trabalho do project Manager em metologias como Scrum e PDCA. 

O Objetivo não é ser exaustivo mas apresentar os pontos que julgo importante na leitura e como eu os interpreto. Espero que gostem :)
