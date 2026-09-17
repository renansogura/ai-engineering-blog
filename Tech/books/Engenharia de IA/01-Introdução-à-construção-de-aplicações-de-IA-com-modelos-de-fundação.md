---
title: Introdução à construção de aplicações de IA com modelos de fundação
book: Engenharia de IA
emoji: 🤖
category: livro
tema: IA
layout: post
capa: assets/Engenharia_de_IA.png
order: 1
---

Antes mesmo de iniciar a minha jornada como Engenheiro de IA eu tinha mapeado para realizar essa leitura, pois afinal, o que é ser um engenheiro de IA? Até pouco antes de iniciar minha trajetória profissional eu não tinha dimensão disso, mas hoje enxergo que a missão de um engenheiro de IA é de construir aplicações de IA utilizando os modelos de fundação. 

O livro começa discutindo os conceitos básicos dos modelos de linguagem. O primeiro ponto e não menos importante é entender que qualquer modelo é em sua essência estatístico, portanto, a forma como ele entende os inputs e gera os outputs são probabilísticos e devido a isso as respostas podem não ser iguais (em algumas vezes até erradas mesmo com a melhoria significativa dos modelos de fundação). 

**Tokenização:**

Por muito tempo considerava que era irrelevante se preocupar com os fundamentos, no entanto, com o tempo compreendi que na verdade são os fundamentos que nos levam para níveis mais altos. O primeiro fundamento que vamos discutir é o **token** que trata-se de uma unidade básica que pode ser um caractere, uma palavra ou parte de uma palavra. Já a tokenização refere-se ao processo em que pegamos o texto original e dividimos ele em partes menores. Em poucas palavras, a tokenização é a somatória dos tokens. 

**Modelos de linguagem:**

Basicamente existem dois tipos de modelos de linguagem, os mascarados e autoregressivos. Os modelos mascarados são treinados para prever os tokens ausentes em qualquer posição de uma dada sequência, para isso eles utilizam o contexto disponível tanto antes quanto depois da palavra a ser definida. Por outro lado, os modelos autoregressivos são treinados para prever o último token e para isso utilizam todo o contexto disponível antes da palavra final. Olhe os seguintes exemplos

Exemplo 1: A tinta deve ____ depois de amanhã - **Modelo de linguagem mascarado**

Exemplo 2: A seleção brasileira de futebol não ganhou a _____ (previsão) - **Modelo de linguagem autoregressivo**

**Modelos de linguagem multimodais:**

Os modelos de linguagem são incríveis para executar tarefas, contudo, em um primeiro momento estiveram limitados ao texto. A realidade é que no dia a dia nós humanos não nos comunicamos apenas com texto, mas também por voz, imagens e etc. Nesse contexto, surgem os modelos multimodais e para que a IA consiga operar no mundo real, ela precisa ser capaz de se adaptar a essa realidade. 

Um modelo multimodal ele é capaz de gerar o próximo token condicionado a tokens que não necessariamente são textos, mas sim, imagens ou até mesmo voz. 




