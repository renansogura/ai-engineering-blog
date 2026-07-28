**Projetando sistemas de agentes**

Quando iniciei a jornada para estudar agentes de IA eu tinha em mente que era algo extramamente complexo e que estava fora do meu alcance. Sabendo disso, tomei a seguinte decisão: Vou começar simples. Primeiro passei a construir agentes para tarefas pequenas mas que eram úteis no meu dia a dia, como por exemplo: uma analisador de currículos, pois a todo momento precisava adaptar o meu CV para as vagas em que estava me candidatando. Em seguida, evolui para sistemas de agentes mais complexos aonde passei a trabalhar com orquestradores e entendi a importância de ter um processo organizado. Mas claro, tudo isso é apenas a minha observação, e nesse ponto me questionei: Quais são os fundamentos para projetar sistemas agênticos? 

**Componentes essenciais de sistemas de agentes:**

![banner](assets/componentes_essenciais_agents.png)

Na imagem que tomei como referência do livro mas que foi gerada pelo claude conseguimos entender melhor quais são os principais componentes de um agente. Curiosamente, o agente se parece muito com nós humanos em termo de estrutura. Pense na orquestração como se fosse o nosso cérebro decidindo o que vamos fazer, ele é responsável pela coordenação para os demais componentes. 

O modelo é o local aonde temos que raciocinar, portanto, impacta diretamente a qualidade com que os inputs e os outputs são processados, a escolha do modelo impacta diretamente o desempenho do nosso sistema, custo, escalabilidade e etc. 

Entenda as ferramentas como as mãos do nosso agente, são elas que colocam a mão na massa e executam a tarefa. Para isso elas podem utilizar alguma API para realizar pesquisas na web, cálculos ou até mesmo interagir com outro sistemas externos. 

A memória pode ser classificada como curto prazo ou longo prazo. A forma que eu encontrei para entender isso foi: imagine que você está conversando com o seu professor e ele sem querer solta a questão da prova, você certamente irá lembrar desse momento, no entanto, esse conhecimento que você adquiriu veio de apenas essa interação. Agora, quando olhamos para o longo prazo imagine que você ja sabia da questão da prova e foi questionar o professor sobre a questão. Ou seja, você já tinha a informação de interações anteriores. Faz sentido?

A base de conhecimento são como os livros que você teve que estudar para a prova. Assim como você precisa de uma referência para estudar, o mesmo vale para o agente. Se desejamos aperfeiçoar o seu conhecimento, é necessário fornecer dados de qualidade para ele. 

A construção de sistemas agênticos é uma discussão um tanto complexa, pois há o conflito de custo vs benefício. Quanto mais complexa a tarefa em que você tem uma etapa de raciocínio pesada, maior a necessidade de um modelo robusto como o GPT-5.6-sol ou até mesmo o Fable da Anthropic. No entanto, podemos traçar estratégias híbridas para conseguir deixar os modelos pesados executando as tarefas complexas, enquanto para as demais tarefas aplicamos modelos com menor preço relativo por milhões de tokens na entrada e na saída ou até mesmo modelos open-source. 

**Arquitetura de agentes:**

Podemos ter agentes únicos, ou seja, um único agente executa a tarefa assim como podemos ter sistemas de multiagentes que podem ter um fluxo de trabalho coordenado, paralelo ou até mesmo independente. Aqui não é uma questão de melhor ou pior, mas sim de avaliar a necessidade. Agentes únicos funcionam muito bem para tarefas bem definidas e específicas. Agora quando temos tarefas complexas e longas, é interessante pensar em quebrar em partes menores e é ai que o sistema multiagente funciona bem. 

**Melhores práticas para projetar um sistema de agentes:**

**Projeto iterativo:** Destaca a importância de construir sistemas incrementais, ou seja, deve-se obter os feedbacks e incorporá-lo com os novos requisitos. Considere a estratégia de criar protótipos pequenos mas que são funcionais para facilitar a avaliação. Assim é possível aprimorá-los e refiná-los ao longo do ciclo do projeto.

**Estratégia de avaliação:** Cada habilidade ou módulo do agente deve ser testado individualmente para garantir que seu comportamento esteja dentro do esperado. Boas estratégias de avaliação facilitam a correção e permitem identificar rapidamente o teste de limites do agente, como por exemplo, como ele lida com os casos extremos.
 
**Testes no mundo real:** É aquela história: treino é treino e jogo é jogo. Portanto, precisamos colocar o nosso agente no mundo real para entender se de fato ele consegue lidar com a complexidade do mundo real. 

Por fim, gostaria de destacar a estratégia que tem funcionado para mim. Construir agentes de IA é um processo gradual em que dividimos a implementação em etapas menores, testamos, avaliamos o resultado e com esse resultado traçamos a próxima etapa. O mais importante é ter claro o problema que está tentando resolver, qual a arquitetura que precisa ser seguida e não menos importante seja muito **Organizado**, pois assim como você se perde ao ler uma anotação bagunçada, um agente também pode ter uma interpretação equivocada por conta de uma má gestão de pastas. 

