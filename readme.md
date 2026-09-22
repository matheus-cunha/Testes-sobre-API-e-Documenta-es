## Backlog - Sprint 1

| ID    | Prioridade | Descrição | Critérios de aceitação | Estimativa |
| :---: | :---: | :--- | :--- | :---: |
| **US01**| Alta | **Como analista de crédito**, quero ver um gráfico de mapeamento da Inadimplência de recuperação rápida da população de uma região, para basear minha decisão de liberação de crédito. | - Código hospedado via Colab <br>- Deverá existir um método de entrada de UF para filtrar os dados por região <br>- Tratar dados da base de dados SCR <br>- Dados do norte nordeste devem aparecer obrigatóriamente em um gráfico | 16 |
| **US02** | Alta | **Como analista de crédito**, quero ver através de um gráfico a relação entre a porcentagem da dívida que é saudável ou crítica da população de uma região, para saber qual maior uso do crédito em determinado estado. | - Código hospedado via Colab<br>- Deverá existir um método de entrada de UF para filtrar os dados por região<br>- O gráfico deve exibir de maneira clara todas as informações citadas<br>- Não utilizar gráfico de pizza<br>- Dados do Norte Nordeste devem funcionar obrigatoriamente | 18 |


---

## Tasks - Sprint 1 


| ID | Descrição | Descrição de pronto (DOD) | Descrição de feito (DOR) | Estimativa |
| :---: | :--- | :--- | :--- | :---: |
| US01-01 | Estudar métodos de comunicação API / SCR | Levantar metodos para operações | Calculo revisado pela equipe | 5 |
| US01-02 | Implementar feature que baixe CSV e trate dados | Estudo de endpoint e colunas para cálculos | imprimir tabela baixada no Colab | 8 |
| US01-03 | Implementar a visualização de um gráfico para exibição dos dados | Tabela de dados preparada | Dados de amostragem revisados pelo PO | 3 |
| US02-01 | Implementar uma feature que receba os dados do CSV SCR para um df | Validado o funcionamento da US1 | Colunas extraidas para gráfico | 5 |
| US02-02 | Criar uma tabela com os dados de consumo crítico já tratados | Regras de negócio definidas | Extração das colunas e salvamento em DF | 5 |
| US02-03 | Salvar os dados de consumo saudável para a apresentação do gráfico | Regras de negócio definidas | Validado pelo PO o gráfico| 5 |
| US02-04 | Gerar um gráfico com a exibição dos dados solicitados | Regras de negócio definidas | Regras de negócio validados pelo PO e documentados | 3 |

---

Estimativa em pontos baseada em métrica de horas para realizar uma tarefa. 

