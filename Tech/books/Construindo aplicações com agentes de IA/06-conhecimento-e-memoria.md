---
title: Conhecimento e Memória
book: Construindo aplicações com agentes de IA
emoji: 🤖
category: livro
tema: IA
layout: post
capa: assets/construindo_aplicacoes_com_agentes_de_IA.png
order: 6
---

O conhecimento e a memória são duas formas distintas de enriquecer o contexto do seu agente. O conhecimento foca em extraír o conteúdo de um determinado documento, como por exemplo, especificações técnicas, políticas internas ou até mesmo registro de clientes. Por outro lado, a memória foca em capturar o histórico do próprio agente, ou seja, interações anteriores com o usuário, outputs de ferramentas e atualizações de estado. A seguir, vamos começar aprofundando a memória.

**Abordagens fundamentais da memória:**

O primeiro ponto que é interessante para iniciarmos a discussão sobre memória é a janela de contexto. Não sei dizer se você já teve a oportunidade de trabalhar com o claude code, mas independente da sua resposta, existe um campo no lado direito inferior da tela com o formato de um disco que tem por objetivo monitorar o contexto daquela sessão. Modelos como Sonnet e Haiku possuem uma janela de contexto menor por conta das características dos próprios modelos. Portanto, se o desejo for realizar um trabalho complexo como leitura de documentos pesados, manter o histórico da conversa ou conectar o modelo a servidores MCP, recomenda-se modelos com uma janela de contexto maior, como por exemplo, Opus 5. Para você ter uma ideia, 1.000 tokens correspondem a aproximadamente 750 palavras em inglês. 

**1. Busca Tradicional de texto completo:**

Em sua essência, é uma estrutura que permite buscas extremamentes rápidas, pois em vez do agente examinar todas as mensagens armazenadas, ele procura a correspondência exata ou muito próxima de palavras no texto. Na prática, funciona da seguinte maneira: Os documentos são indexados e quebrados em tokens, e, em seguida, para realizar a busca pega os termos da query e compara com os documentos existentes. Por fim, normalmente se aplica o algoritmo do BM25 para ranquear por frequência/relevância. Como eu disse, é uma técnica muito boa por conta da velocidade e de sua precisão, o problema é que não consegue identificar sinônimos ou variações semânticas, o que no meu entendimento é uma limitação considerável pensando em que muito provavelmente vamos trabalhar com banco de dados cada vez maiores. 

**2. Memória semântica e armazenamentos vetoriais:**

Vamos considerar esse tópico como a evolução do anterior. se antes havia o problema de identificar sinônimos ou variações semânticas, isso deixa de ser um problema aqui, pois estamos armazenando o significado de algo e não as palavras exatas. Em sistemas de IA, a memória semântica é implementada por meio de embeddings que tem por objetivo transformar um texto em um vetor, vamos analisar um exemplo a seguir: 

"cachorro late" → [0.23, -0.87, 0.41, 0.09, ...]
"cão ladra"     → [0.21, -0.85, 0.39, 0.11, ...]
"avião voa"     → [-0.54, 0.12, -0.77, 0.88, ...]

Note que textos/palavras com significados parecidos tem valores vetoriais próximos, por outro lado, textos diferentes tem seus valores distantes. Portanto, a conclusão que podemos observar é que a busca é um problema geométrico em que queremos selecionar os vetores mais próximos da query. O embedding é uma técnica que tenho aplicado com frequência, caso tenha interesse em saber mais, dê uma olhada em modelos populares como Word2Vec, GloVe e BERT. Em outro momento vamos aprofundar sobre o embedding e seus modelos. 

Uma vez que temos a representação vetorial resultante dos embeddings precisamos de um local para armazenar de forma eficiente, é ai que entra o Vector DataBase (banco de dados vetoriais) que foi projetado especificamente com as representações vetorias de alta dimensionalidade. São configurados para buscas rápidas de similaridade, o que por sua vez, permite a recuperação de embeddings semanticamente semelhantes. Alguns exemplos de armazenamento vetoriais são: VectorDB, FAISS e Annoy. 

Outro ponto interessante sobre a memória semântica é que ela é um tipo de memória de longo prazo, portanto, os embeddings gerados ficam armazenados no Vector DataBase onde o agente pode acessar a memória semântica armazenada e fornecer respostas apropriadas. Essas buscas costumam ser rápidas, sendo uma estratégia forte para lidar com grandes volumes de informações. 

**Retrieval-Augmented Generation (RAG):**

Uma das técnicas mais utilizadas e poderosas que conhecemos que basicamente traz a seguinte mensagem: Incorporar memória em sistemas agênticos não envolve apenas armazenar e gerenciar conhecimento, mas sim de aprimorar a capacidade do sistema de gerar respostas dentro do contexto esperado. Direto ao ponto, o RAG é a técnica de dar memória externa a uma LLM na hora da resposta.


![Pipeline de indexação para RAG](https://raw.githubusercontent.com/renansogura/ai-engineering-blog/main/assets/pipeline-rag.png)

Na imagem acima podemos entender melhor como funciona o fluxo de trabalho com RAG. Imagino que você esteja se perguntando em que momento utilizamos essa técnica, pois uma API deveria resolver, não? Essa estratégia costuma ser aplicada quando queremos compartilhar algum documento para enriquecer a análise, como por exemplo, políticas internas da companhia. Para isso, primeiro disponibilizamos os documentos, dividimos o documento em partes menores e, em seguida, cada parte é convertida em uma representação vetorial por um modelo de codificação. Os vetores resultantes do embedding são armazenados em um vector DataBase, o que por sua vez, permite a busca semântica rápida no momento da consulta. 

o RAG é uma técnica que funciona por **inferência** e não por treinamento. Então quando você sobe um documento e ele é utilizado via RAG ele fica apenas no contexto daquela consulta - portanto, é uma memória de curto prazo. 

**GraphRAG:**

O GraphRAG e como se fosse a evolução do RAG em que complementamos o banco vetorial com um grafo de conhecimento, onde os nós representam as entidades e as arestas as relações entre elas. Essa versão permite com que seja possível lidar com uma variedade maior de perguntas, pois agora conseguimos gerenciar inter-relações e dependências complexas entre as informações aumentando a precisão do conteúdo. 

Pode ser que você esteja se questionando quando utilizar essa técnica. Para ser sincero, eu nunca tive a oportunidade de aplicar mas vejo um potencial muito grande em um tópico em específico. Se estamos em um cenário que precisamos combinar informações de documentos que são muito distantes entre si, a busca por similaridade não costuma trazer os dois resultados de uma vez. E é nesse ponto que o GraphRAG ataca, pois agora como sabemos que as entidades e suas relações formam um grafo. Sendo assim, na consulta ao invés de se limitar a busca por similaridade, o sistema navega pelo grafo seguindo as arestas e encontrando as informações nas arestas. O GraphRAG consiste em 3 componentes: 

**1. Grafo de conhecimento:**

É o componente que armazena os dados em formato de grafo, onde os nós e arestas são definidos explicitamente. Banco de dados de grafos são excelentes na gestão de dados e suporte de consultas complexas. 

**2. Sistemas de recuperação:**

Esse sistema foi projetado para consultar banco de dados de grafos, seja extraindo subgrafos ou agrupamentos de nós relevantes para a consulta. 

**3. Modelo Generativo:**

Representa a etapa final, uma vez que os dados foram encontrados na forma de um grafo, o modelo sintetiza as informações para gerar respostas contextualizadas.

**Construindo grafos de conhecimento:**

![Construção de um grafo de conhecimento](https://raw.githubusercontent.com/renansogura/ai-engineering-blog/main/assets/construcao-grafo.png)

A imagem acima indica o passo a passo de como construir grafos de conhecimento e agora vamos expandir como é feito. Primeiro precisamos coletar dados e esses dados podem ter diferentes origens, como por exemplo, banco de dados, pdf's ou até mesmo conteúdo próprio. Quanto maior a diversidade e qualidade das fontes maior o conhecimento disponível para o agente trabalhar. Na etapa de pré-processamento de dados, após coletar os dados precisamos limpá-los e pré-processados. O motivo é simples: existem muitas informações que não são úteis para o nosso agente, portanto, corrigir os erros e padronizar o formato dos dados reduz o rúido e melhora a precisão. 

Agora que temos os dados padronizados, precisamos identificar as entidades (elementos-chave) nos dados que serão representados pelos nós no grafo de conhecimento. a ideia aqui é agrupar por entidades comuns, portanto pessoas, lugares ogarnizações e conceitos pode ser considerado um exemplo. Com as entidades criadas, é necessário determinar os relacionamentos entre elas para conectá-las. A ontologia é a etapa em que se define as categorias e os relacionamentos no grafo de conhecimento. 

Por fim, as próximas etapas consistem em preencher o grafo com as entidades extraídas e seus relacionamentos, criando nós e arestas no banco de dados de grafo com a estrutura da ontologia. Em seguida, deve ser integrado ao sistemas existentes e validado para garantir a utilidade. É importante que mesmo após a implementação seja realizado manutenções e atualizações, visto que, a entidade não é estática.











