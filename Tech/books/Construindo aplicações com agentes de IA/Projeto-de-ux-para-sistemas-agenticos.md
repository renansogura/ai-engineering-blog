---
title: Projetando sistemas de agentes
book: Construindo aplicações com agentes de IA
emoji: 🤖
category: livro
tema: IA
layout: post
capa: assets/construindo_aplicacoes_com_agentes_de_IA.png
order: 3
---

Na minha visão, não importa se o sistema de agente ele incrível ou que não tem nenhum erro de output. Se a experiência do usuário for ruim, o seu sistem agêntico não serva para nada. Em outro livro o "teste da mãe" que discutimos em outra sessão fala muito sobre a geração de valor e a experiência do cliente deve ser uma das prioridades em qualquer solução. 

existem diferentes modalidades de interação entre agentes e usuário. Desde chatbots até assistentes de voz, como por exemplo, a siri e a alexa. Vamos detalhar um pouco melhor a seguir. 

**1. Interface gráfica:**

A interface gráfica é a forma visual e interativa que o usuário tem para interagir com o sistemas de agentes. As interfaces costumam combinar textos, drag and drop, botões, ícones e entre outras funcionalidades que melhoram a experiência do usuário. Em um dos projetos que participei, tivemos um time de agentes bastante complexo mas que ao juntar tudo em um .html ficou muito interessante a visualização de como os agentes estavam operando. Muitas vezes a interface gráfica ela não ajuda apenas o usuário final, mas também o desenvolvedor a validar se o resultado está coerente com os requisitos. 

**2. Interface de fala e voz:** Talvez um dos mais famosos por conta da Siri ou alexa, essa interface é aquela que o usuário não precisa digitar, ela aproveita a linguagem falada para se comunicar. Mas como funciona? O seu microfone é responsável por captar as ondas de som do ar, em seguida, o conversor analógico valida a frequência e o  comprimento de onda, encaminha para um modelo de IA (rede neural) que compara os valores encontrados com os treinados e identifica as palavras, por fim, a voz vira texto no computador, a IA lê e responde. Aqui temos dois pontos interessantes: 

Primeiro, aceite o quanto antes que você não vai se livrar da física. Eu fui uma das grandes vítimas dessa disciplina na faculdade, e, apesar de sempre gostar da disciplina era extremamente complicado mas reconheço que mesmo em tecnologia os conceitos continuam sendo fundamentais. 

Segundo, são tantos processos desde o microfone até a resposta da IA que na minha cabeça deveria demorar uns 3 anos para responder. O incrível é que isso ocorre em segundos e isso me leva a dúvida em que ponto estamos da tecnologia. 

Posso dizer que um dos meus grandes sonhos seria conseguir construir uma interface de voz que opere igual o jarvis. Hoje trabalho bastante com o claude Code, imagina que incrível seria ao invés de escrever o prompt ele seja desenhado pela minha própria voz e o Jarvis responda se aquele prompt faz sentido. É como se eu pudesse trabalhar andando por ai, então posso trabalhar enquanto lavo roupa. É provável que já seja possível criar um Jarvis com essa funcionalidade, mas para ser sincero nunca sentei para olhar. 

**3. Interface de vídeo:** Para ser sincero eu nunca mexi em uma, apenas acompanhei que alguns processos seletivos estão começando a colocar etapas em que você tem uma entrevista com um agente de IA em que ele realiza as perguntas por voz e guarda a sua resposta em algum database. Confesso que a ideia não me agrada mas se essa é a condição que a tecnologia impõe, acredito que não tenha muito que se possa fazer. 

Um fato interessante, é que é possível combinar modalidades e esse método é bem comum atualmente. O grande desafio é conseguir transitar perfeitamente entre as modalidades, mantendo o estado e o contexto durante todo o processo. 

É fundamental deixar claro os graus de autonomia, permitir transições entre eles quando cabível e deixar claro o risco e benefício de cada nível.

Um tópico final que o capítulo traz é a da experiência com agentes síncronos e assíncronos, referentes as vantagens e desvantagens de cada um. 

Quando falamos de agentes síncronos, são aqueles que as interações ocorrem em tempo real entre o usuário e o agente. esse processo deve priorizar a clareza em suas respostas, um bom exemplo seria o modo live do google gemini que está disponível nos celulares da samsung. Basicamente, podemos interagir com ele em tempo real por voz. Particularmente utilizo bastante para conseguir manter o inglês em dia, afinal não sei quando irei utilizar novamente. 

Já os agentes assíncronos são aqueles que a interação do usuário ocorre de maneira independente, onde a comunicação pode ocorrer ao longo do tempo e não necessariamente em um momento específico. A ideia é que o usuário sempre consiga monitorar o que o agente está fazendo, em que etapa ele se encontra e etc. Um exemplo prático seria a aplicação de agentes no setor financeiro treinados para identificar e denunciar fraudes. 

**Manutenção de estado:**

A manutenção de estado é o que permite a continuidade do contexto em sistemas agênticos. Para que a interação pareça perfeita, um agente deve ser capaz de rastrear o que aconteceu até o momento e o que o usuário pretende alcançar. Um exemplo interessante é que estou desenvolvendo uma ferramenta do PDCA, no entanto, o PDCA é uma metodologia de melhoria contínua que busca melhorar o indicador por meio de ciclos de avaliação. Sendo assim, a memória de estado é um passo fundamental, pois preciso que os meus agentes tenham em mente do que foi executado até agora e quais são os próximos passos em "act" para que o indicador continue evoluíndo. 

Um capítulo interessante para quem gosta dessa parte de UX, mas que confesso não ser minha parte favorita, porém, reconheço ser extremamente necessário. 
