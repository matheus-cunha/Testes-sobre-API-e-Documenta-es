## 📋 Backlog do Produto (WIP) <a id="backlog"></a>

| ID    | Sprint | Descrição | Critérios de aceitação |
| :---: | :---: | :--- | :--- |
| <mark style="color: #2ea44f;">**US01**</mark> |    1   | **Como analista de crédito**, quero ver um gráfico de mapeamento da Inadimplência de recuperação rápida da população de uma região, para basear minha decisão de liberação de crédito. | - Código hospedado via Colab <br>- Deverá existir um método de entrada de UF para filtrar os dados por região <br>- Tratar dados da base de dados SCR <br>- Dados do norte nordeste devem aparecer obrigatóriamente em um gráfico |
| **US02** |    1   | **Como analista de crédito**, quero ver através de um gráfico a relação entre a porcentagem da dívida que é saudável ou crítica da população de uma região, para saber qual maior uso do crédito em determinado estado. | - Código hospedado via Colab<br>- Deverá existir um método de entrada de UF para filtrar os dados por região<br>- O gráfico deve exibir de maneira clara todas as informações citadas<br>- Não utilizar gráfico de pizza<br>- Dados do Norte Nordeste devem funcionar obrigatoriamente |
| **US03** |    2   | **Como analista de crédito**, quero visualizar um gráfico comparando a taxa de juros de crédito  das maiores instituições financeiras do Brasil, para poder comparar quais são mais altas. | - Código hospedado via Colab<br>- Dar preferência a exibição do Sicoob, Caixa Econômica e Banco do Brasil por ter mais força no Norte Nordeste<br>- O gráfico deve exibir de maneira clara todas os bancos e suas respectivas taxas de juros |
| **US04** |    2   | **Como analista de crédito**, quero ver através de um gráfico a relação de dívidas e inadimplência causada por Bets em uma região, para poder decidir a aprovação de crédito. | - Código hospedado via Colab<br>- Utilizar dados reais do IBGE |
| **US05** |    2   | **Como analista de crédito** desejo visualizar dados demográficos e econômicos locais, para estimar o potencial financeiro dos solicitantes de uma região. | • Código hospedado via Colab <br>• Os dados devem ser regionais<br>• Deverá ser consumida uma das APIs já integradas para sumarização dos dados |
| **US06** |    3   | **Como analista de crédito**, quero visualizar a evolução histórica dos dados financeiros e econômicos, para identificar a trajetória de melhora ou piora no perfil da região. | - Código hospedado via Colab<br>- O filtro de dados deve ser por região<br>- Exibir um gráfico de linhas para comparativo de evolução<br>- Os dados devem ser referentes a no mínimo 2 anos |
| **US07** |    3   | **Como analista de crédito**, quero identificar áreas com alto índice de vulnerabilidade através de um score de crédito, para direcionar produtos de crédito alternativo ou microcrédito orientado. | - Código hospedado via Colab<br>- Elaborar métricas reais de avaliação de score<br>- Exibir um gráfico com os pontos de avaliação por região |
| **US08** |    3   | **Como cliente** gostaria de poder acessar uma tela institucional contendo a explicação da metodologia de dados e cálculos do sistema para compreender a origem e a confiabilidade das estatísticas apresentadas. | - A tela deve ser responsiva<br>- A tela deve apresentar toda a metodologia de dados<br>- Deve apresentar a explicação do calculo do Score<br>- Deve apresentar a origem dos dados e fontes<br>- Código versionado e commitado no GitHub |
| **US09** |    3   | **Como cliente** gostaria de visualizar uma tela com um resumo dos gráficos anteriormente gerados de maneira prática e fácil de entender para facilitar a operação e filtragem de dados. | - Deve apresentar todos os gráficos gerados pelo Colab<br>- Deve informar fontes de dados<br>- Deve ser responsivo<br>- Navegação intuitiva<br>- Código versionado e commitado no GitHub |

---
<mark style="color: #2ea44f;">

## ☑️ DoR — Definition of Ready <a id="dready"></a>

- [X] Título claro e objetivo definido
- [X] Definir critérios de aceitação
- [X] Especificar regras de negócio
- [X] Estimativa da User Story
- [X] Verificar dependências
- [X] Wireframe disponível
- [X] Regras de negócio definidas
- [X] Modelo de dados disponível
- [X] Definição de casos de teste 

## ✅ DoD — Definition of Done <a id="dod"></a>

- [X] Código realizado e versionado 
- [X] Remoção de códigos comentados
- [X] Testes realizados
- [X] Merge da Branch da task 

---
