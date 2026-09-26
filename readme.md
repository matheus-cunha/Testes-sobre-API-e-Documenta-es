<h1 align="center">FATEC Profº Jessen Vidal - São José dos Campos - 1º Semestre DSM - 2026</h1>
<div align="center">
  <img src="./logokurumin.png" alt="Logo Kurumin" width="200">
  <h2>CEUCI: Crédito Inclusivo</h2>
</div>

Projeto desenvolvido para a API (Aprendizagem por Projeto Integrado) do 1° Semestre do curso Desenvolvimento de Software Multiplataforma (DSM).

> _A API consiste em um projeto de caráter educacional desenvolvido pela instituição de ensino Fatec São José dos Campos. Nesse projeto, os alunos são organizados em equipes com base na metodologia ágil Scrum, sendo proposto um desafio a ser solucionado._

> _Para isso, os integrantes assumem diferentes papéis dentro do processo, de acordo com as responsabilidades estabelecidas pela metodologia. Cada equipe é composta por um aluno responsável pela função de Scrum Master, outro como Product Owner (PO) e os demais integrantes atuando como membros do Dev Team._

<p align="center">
  <a href="#cliente">Clente</a> &#xa0; | &#xa0;
  <a href="#desafio">Desafio</a> &#xa0; | &#xa0;
  <a href="#solucao">Solução</a> &#xa0; | &#xa0;
  <a href="#tecnologias">Tecnologias</a> &#xa0;
</p>
<p align="center">
  <a href="#cronograma">Cronograma</a> &#xa0; | &#xa0;
  <a href="#backlog">Backlog do produto</a> &#xa0; | &#xa0;
  <a href="#dor">DOR</a> &#xa0; | &#xa0;
  <a href="#dod">DOD</a> &#xa0;
</p>
<p align="center">
  <a href="#brabches">Estratégia de branches</a> &#xa0; | &#xa0;
  <a href="#fluxo">Fluxo de trabalho</a> &#xa0; | &#xa0;
  <a href="#time">Time</a> &#xa0;
</p>

---

## 🏫 <span id ="cliente">Cliente</span>

**Professor Fernando Masanori Ashikaga**

---

## 🤔 <span id="desafio">Desafio</span>

Conceder crédito para populações historicamente recusadas por grandes instituições financeiras, identificando onde reside o consumo reprimido e a capacidade real de pagamento sustentável.

Neste projeto, o objetivo é explorar a transformação de dados econômicos públicos do Banco Central do Brasil (BCB) em inteligência territorial para apoiar decisões de crédito mais inclusivas e responsáveis.

---

## 🧩 <span id="solucao">Solução</span>

O sistema CEUCI é uma aplicação voltada à análise de risco de crédito por regiões do Brasil. A plataforma utiliza dados públicos e atualizados, provenientes de fontes como o Banco Central do Brasil, IBGE e outras bases oficiais, para gerar indicadores que auxiliam na compreensão do cenário de crédito e inadimplência em diferentes regiões do Brasil.

A aplicação é apresentada por meio de um painel interativo (dashboard), composto por gráficos, indicadores e filtros que permitem a visualização das informações e identificação de regiões com diferentes níveis de risco de crédito, fornecendo aos analistas informações que podem apoiar a avaliação de cenários e a tomada de decisões relacionadas à concessão de crédito.

---

## ⚙️ <span id="tecnologias">Tecnologias</span>

A análise e o processamento dos dados são realizados utilizando  **Google Colab e Python**, enquanto a interface da aplicação é desenvolvida com **HTML e CSS**. A comunicação entre o processamento dos dados e a aplicação web é realizada por meio do **Flask**.

### Coleta e Processamento de Dados
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white) &#xa0;
![Flask](https://img.shields.io/badge/Flask-3776AB?style=for-the-badge&logo=flask&logoColor=white) &#xa0;
![Pandas](https://img.shields.io/badge/Pandas-3776AB?style=for-the-badge&logo=pandas&logoColor=white) &#xa0;
![Google Colab](https://img.shields.io/badge/Google%20Colab-3776AB?style=for-the-badge&logo=googlecolab&logoColor=white) &#xa0;
![SQL](https://img.shields.io/badge/SQL-3776AB?style=for-the-badge&logo=postgresql&logoColor=white) &#xa0;

> _**Notebook:** [Abrir no Google Colab](https://colab.research.google.com/drive/1Ln9iksPbjt-FFvJKjqi9rXGdUwQIzkZ3?usp=sharing)_

### Frontend  
![HTML5](https://img.shields.io/badge/HTML5-3776AB?style=for-the-badge&logo=html5&logoColor=white) &#xa0;
![CSS3](https://img.shields.io/badge/CSS3-3776AB?style=for-the-badge&logo=css3&logoColor=white) &#xa0;

---

## <span id="cronograma">MVP</span>

O desenvolvimento do *CEUCI* está estruturado em **3 sprints**, focando na evolução progressiva desde a fundação técnica até a entrega final ao usuário:

| Sprint | Foco do MVP | Entregas Principais | Vídeo da Sprint | Status |
| :--- | :--- | :--- | :--- | :----: |
| **[Sprint 1](./docs/sprint-backlog/sprint-01.md)**<br>*(07/09 - 27/09)* | **Base de dados** | Definição de bases de dados do projeto e desenvolvimento de funções que façam download e tratamento dos arquivos de dados. |  | ✅ |
| **[Sprint 2](./docs/sprint-backlog/sprint-02.md)**<br>*(05/10 - 25/10)* | **Aperfeiçoamento** | Criação de gráficos direcionados a Bets, estrutura de navegação básica e definição da métrica para Score. |  | ⏳ |
| **[Sprint 3](./docs/sprint-backlog/sprint-03.md)**<br>*(02/11 - 22/11)* | **Refinamento** | Responsividade e integração das telas ao backend e implementação da ferramenta de Score. |  | ⏳ |

---

## 📋 <span id="backlog">Backlog do Produto</span>

| ID    | Sprint | Descrição | Critérios de aceitação |
| :---: | :---: | :--- | :--- |
| **US01** |    1   | **Como analista de crédito**, quero ver um gráfico de mapeamento da Inadimplência de recuperação rápida da população de uma região, para basear minha decisão de liberação de crédito. | - Código hospedado via Colab <br>- Deverá existir um método de entrada de UF para filtrar os dados por região <br>- Tratar dados da base de dados SCR <br>- Dados do norte nordeste devem aparecer obrigatóriamente em um gráfico |
| **US02** |    1   | **Como analista de crédito**, quero ver através de um gráfico a relação entre a porcentagem da dívida que é saudável ou crítica da população de uma região, para saber qual maior uso do crédito em determinado estado. | - Código hospedado via Colab<br>- Deverá existir um método de entrada de UF para filtrar os dados por região<br>- O gráfico deve exibir de maneira clara todas as informações citadas<br>- Não utilizar gráfico de pizza<br>- Dados do Norte Nordeste devem funcionar obrigatoriamente |
| **US03** |    2   | **Como analista de crédito**, quero visualizar um gráfico comparando a taxa de juros de crédito  das maiores instituições financeiras do Brasil, para poder comparar quais são mais altas. | - Código hospedado via Colab<br>- Dar preferência a exibição do Sicoob, Caixa Econômica e Banco do Brasil por ter mais força no Norte Nordeste<br>- O gráfico deve exibir de maneira clara todas os bancos e suas respectivas taxas de juros |
| **US04** |    2   | **Como analista de crédito**, quero ver através de um gráfico a relação de dívidas e inadimplência causada por Bets em uma região, para poder decidir a aprovação de crédito. | - Código hospedado via Colab<br>- Utilizar dados reais do IBGE |
| **US05** |    2   | **Como analista de crédito** desejo visualizar dados demográficos e econômicos locais, para estimar o potencial financeiro dos solicitantes de uma região. | • Código hospedado via Colab <br>• Os dados devem ser regionais<br>• Deverá ser consumida uma das APIs já integradas para sumarização dos dados |
| **US06** |    3   | **Como analista de crédito**, quero visualizar a evolução histórica dos dados financeiros e econômicos, para identificar a trajetória de melhora ou piora no perfil da região. | - Código hospedado via Colab<br>- O filtro de dados deve ser por região<br>- Exibir um gráfico de linhas para comparativo de evolução<br>- Os dados devem ser referentes a no mínimo 2 anos |
| **US07** |    3   | **Como analista de crédito**, quero identificar áreas com alto índice de vulnerabilidade através de um score de crédito, para direcionar produtos de crédito alternativo ou microcrédito orientado. | - Código hospedado via Colab<br>- Elaborar métricas reais de avaliação de score<br>- Exibir um gráfico com os pontos de avaliação por região |
| **US08** |    3   | **Como cliente** gostaria de poder acessar uma tela institucional contendo a explicação da metodologia de dados e cálculos do sistema para compreender a origem e a confiabilidade das estatísticas apresentadas. | - A tela deve ser responsiva<br>- A tela deve apresentar toda a metodologia de dados<br>- Deve apresentar a explicação do calculo do Score<br>- Deve apresentar a origem dos dados e fontes<br>- Código versionado e commitado no GitHub |
| **US09** |    3   | **Como cliente** gostaria de visualizar uma tela com um resumo dos gráficos anteriormente gerados de maneira prática e fácil de entender para facilitar a operação e filtragem de dados. | - Deve apresentar todos os gráficos gerados pelo Colab<br>- Deve informar fontes de dados<br>- Deve ser responsivo<br>- Navegação intuitiva<br>- Código versionado e commitado no GitHub |

---

## ✅ <span id="dor">DoR — Definition of Ready - Geral</span>

- [X] Definir US e critérios de aceitação
- [X] Card do Jira escrito com as regras de negócio definidas
- [X] Subtarefas criadas a partir da US
- [X] Subtarefas da User Story estimadas 
- [X] Design do Figma anexado ao card do Jira
- [X] Modelo de dados anexado ao card do Jira
- [X] Definição de casos de teste 

---

## ✅ <span id="dod">DoD — Definition of Done -Geral</span>

- [X] Código realizado e versionado 
- [X] Remoção de códigos comentados
- [X] Testes realizados
- [X] Merge da Branch da task 

---

## ☑️ <span id="branches">Estratégia de branches - GITHUB</span>

- Main - Entrega estável do sistema.
- Dev - Estado de desenvolvimento atual da Sprint.
- feature/nome-da-feature: Branches criadas a partir da branch dev para novas funcionalidades.

---

## ☑️ <span id="fluxo">Fluxo de Trabalho (Pull Requests)</span>

Para evitar que códigos quebrados entrem na branch principal, seguiremos este fluxo:

1. **Criação:** Abra o PR da `feature/` para a `develop`.
2. **Checklist de Autoria:** O autor deve garantir que a feature está completa.
3. **Revisão por Pares:** Pelo menos 1 colega deve revisar o código.
4. **Aprovação:** O merge só será feito após a aprovação e se não houver conflitos.

---

## 👥 <span id="time">Time</a>

Nome | Função | LinkedIn | GitHub
-|-|-|-
Nícolas César Silva Ferreira | Product Owner / Developer | [![LinkedIn](https://img.shields.io/badge/linkedin-blue?style=for-the-badge)](https://www.linkedin.com/in/nicolascsf/) | <a href="https://github.com/ncsf01"> <img src="https://img.shields.io/badge/github-black?style=for-the-badge&logo=github"/> </a>
Matheus Henrique da Cunha | Scrum Master / Developer | [![LinkedIn](https://img.shields.io/badge/linkedin-blue?style=for-the-badge)](https://www.linkedin.com/in/matheus-cunha-sjc/) | <a href="https://github.com/matheus-cunha"> <img src="https://img.shields.io/badge/github-black?style=for-the-badge&logo=github"/> </a>
Enzo Zani | Developer | [![LinkedIn](https://img.shields.io/badge/linkedin-blue?style=for-the-badge)](https://www.linkedin.com/) | <a href="https://github.com/"> <img src="https://img.shields.io/badge/github-black?style=for-the-badge&logo=github"/> </a>
Gabriel Hatano Rocha | Developer | [![LinkedIn](https://img.shields.io/badge/linkedin-blue?style=for-the-badge)](https://www.linkedin.com/in/gabrielhatano/) | <a href="https://github.com/gabe435"> <img src="https://img.shields.io/badge/github-black?style=for-the-badge&logo=github"/> </a>
Gabriela Biscaro Belan | Developer | [![LinkedIn](https://img.shields.io/badge/linkedin-blue?style=for-the-badge)](https://www.linkedin.com/) | <a href="https://github.com/Gabiscaroo"> <img src="https://img.shields.io/badge/github-black?style=for-the-badge&logo=github"/> </a>
João Manoel de Almeida Sales e Silva | Developer | [![LinkedIn](https://img.shields.io/badge/linkedin-blue?style=for-the-badge)](https://www.linkedin.com/in/joão-manoel-de-almeida-sales-e-silva-372a423a0/) | <a href="https://github.com/JoaoManoel-dev-cpu"> <img src="https://img.shields.io/badge/github-black?style=for-the-badge&logo=github"/> </a>
Luan Henrique Borsoi Alves | Developer | [![LinkedIn](https://img.shields.io/badge/linkedin-blue?style=for-the-badge)](https://www.linkedin.com/) | <a href="https://github.com/luanhba"> <img src="https://img.shields.io/badge/github-black?style=for-the-badge&logo=github"/> </a>
Karina Martins Molina | Developer | [![LinkedIn](https://img.shields.io/badge/linkedin-blue?style=for-the-badge)](https://www.linkedin.com/in/karina-molina-3aa2482ba/) | <a href="https://github.com/karina-molina"> <img src="https://img.shields.io/badge/github-black?style=for-the-badge&logo=github"/> </a>
Rebeca Rodrigues da Silva | Developer | [![LinkedIn](https://img.shields.io/badge/linkedin-blue?style=for-the-badge)](https://www.linkedin.com/in/rebeca-rodsilva/) | <a href="https://github.com/rebeca-rod"> <img src="https://img.shields.io/badge/github-black?style=for-the-badge&logo=github"/> </a> 


---
