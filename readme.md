<h1 align="center">DSM 1º SEMESTRE 2026 - API</h1>
<div align="center">
  <img src="./logokurumin.png" alt="Logo Kurumin" width="200">
  <h2>SUMEH: Crédito Inclusivo</h2>
</div>

<p>
  <a href="#cliente"><img src="https://img.shields.io/badge/Cliente-grey?style=for-the-badge" alt="Cliente"></a> 
  <a href="#dor"><img src="https://img.shields.io/badge/Dor_do_Cliente-grey?style=for-the-badge" alt="Dor do Cliente"></a> 
  <a href="#desafio"><img src="https://img.shields.io/badge/Desafio-grey?style=for-the-badge" alt="Desafio"></a> 
  <a href="#solucao"><img src="https://img.shields.io/badge/Solução-grey?style=for-the-badge" alt="Solução"></a>
</p>
<p><a href="#crono"><img src="https://img.shields.io/badge/Cronograma-grey?style=for-the-badge" alt="Cronograma"></a> </p>
<p><a href="#backlog"><img src="https://img.shields.io/badge/Backlog_do_Produto-grey?style=for-the-badge" alt="Backlog do Produto"></a></p>
<p>
  <a href="#dready"><img src="https://img.shields.io/badge/DoR-grey?style=for-the-badge" alt="DoR"></a> 
  <a href="#dod"><img src="https://img.shields.io/badge/DoD-grey?style=for-the-badge" alt="DoD"></a> 
</p>
<p><a href="#tech"><img src="https://img.shields.io/badge/Tecnologias-grey?style=for-the-badge" alt="Tecnologias"></a></p>
<a href="#time"><img src="https://img.shields.io/badge/Time-grey?style=for-the-badge" alt="Time"></a>

---

## 🏫 Cliente <a id="cliente"></a>

**Professor Fernando Masanori Ashikaga**

---

## 🤔 Dor do Cliente <a id="dor"></a>

Conceder crédito para populações historicamente recusadas por grandes instituições financeiras, identificando onde reside o consumo reprimido e a capacidade real de pagamento sustentável.

---

## 🎯 Desafio <a id="desafio"></a>

Transformar dados econômicos públicos do Banco Central do Brasil (BCB) em inteligência territorial para apoiar decisões de crédito mais inclusivas e responsáveis.

---

## 🧩 Solução <a id="solucao"></a>

A partir de dados públicos calcular risco de crédito por região, permitindo que analistas de crédito visualizem indicadores, apliquem filtros e comparem territórios de forma simples e responsiva.

O análise e processamento de dados é feito com **Google Colab**, e resultado é exibido em um site desenvolvido com **HTML + CSS + Python (Flask)**.

---

## 📋 Backlog do Produto (WIP) <a id="backlog"></a>

| ID    | Sprint | Descrição | Critérios de aceitação |
| :---: | :---: | :--- | :--- |
| **US1** |    1   | **Como analista de crédito**, quero ver um gráfico de mapeamento da Inadimplência de recuperação rápida da população de uma região, para basear minha decisão de liberação de crédito. | - Código hospedado via Colab <br>- Deverá existir um método de entrada de UF para filtrar os dados por região <br>- Tratar dados da base de dados SCR <br>- Dados do norte nordeste devem aparecer obrigatóriamente em um gráfico |
| **US2** |    1   | **Como analista de crédito**, quero ver através de um gráfico a relação entre a porcentagem da dívida que é saudável ou crítica da população de uma região, para saber qual maior uso do crédito em determinado estado. | - Código hospedado via Colab<br>- Deverá existir um método de entrada de UF para filtrar os dados por região<br>- O gráfico deve exibir de maneira clara todas as informações citadas<br>- Não utilizar gráfico de pizza<br>- Dados do Norte Nordeste devem funcionar obrigatoriamente |
| **US3** |    2   | **Como analista de crédito**, quero visualizar um gráfico comparando a taxa de juros de crédito  das maiores instituições financeiras do Brasil, para poder comparar quais são mais altas. | - Código hospedado via Colab<br>- Dar preferência a exibição do Sicoob, Caixa Econômica e Banco do Brasil por ter mais força no Norte Nordeste<br>- O gráfico deve exibir de maneira clara todas os bancos e suas respectivas taxas de juros |
| **US4** |    2   | **Como analista de crédito**, quero ver através de um gráfico a relação de dívidas e inadimplência causada por Bets em uma região, para poder decidir a aprovação de crédito. | - Código hospedado via Colab<br>- Utilizar dados reais do IBGE |
| **US5** |    2   | **Como analista de crédito** desejo visualizar dados demográficos e econômicos locais, para estimar o potencial financeiro dos solicitantes de uma região. | • Código hospedado via Colab <br>• Os dados devem ser regionais<br>• Deverá ser consumida uma das APIs já integradas para sumarização dos dados |
| **US6** |    3   | **Como analista de crédito**, quero visualizar a evolução histórica dos dados financeiros e econômicos, para identificar a trajetória de melhora ou piora no perfil da região. | - Código hospedado via Colab<br>- O filtro de dados deve ser por região<br>- Exibir um gráfico de linhas para comparativo de evolução<br>- Os dados devem ser referentes a no mínimo 2 anos |
| **US7** |    3   | **Como analista de crédito**, quero identificar áreas com alto índice de vulnerabilidade através de um score de crédito, para direcionar produtos de crédito alternativo ou microcrédito orientado. | - Código hospedado via Colab<br>- Elaborar métricas reais de avaliação de score<br>- Exibir um gráfico com os pontos de avaliação por região |
| **US8** |    3   | **Como cliente** gostaria de poder acessar uma tela institucional contendo a explicação da metodologia de dados e cálculos do sistema para compreender a origem e a confiabilidade das estatísticas apresentadas. | - A tela deve ser responsiva<br>- A tela deve apresentar toda a metodologia de dados<br>- Deve apresentar a explicação do calculo do Score<br>- Deve apresentar a origem dos dados e fontes<br>- Código versionado e commitado no GitHub |
| **US9** |    3   | **Como cliente** gostaria de visualizar uma tela com um resumo dos gráficos anteriormente gerados de maneira prática e fácil de entender para facilitar a operação e filtragem de dados. | - Deve apresentar todos os gráficos gerados pelo Colab<br>- Deve informar fontes de dados<br>- Deve ser responsivo<br>- Navegação intuitiva<br>- Código versionado e commitado no GitHub |

---

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

## 📝 Cronograma <a id="crono"></a>

| Evento                           | Período           | Status |
| :------------------------------- | :---------------- | :----: |
| Kick-off geral                   | 24/08 a 28/08     |   ✅   |
| Construção do Backlog / Planning | 31/08 a 04/09     |   ✅   |
| **Sprint 1**                     | **07/09 a 27/09** |   ✅   |
| Sprint Review / Planning         | 28/09 a 02/10     |   ⏳   |
| **Sprint 2**                     | **05/10 a 25/10** |   ⏳   |
| Sprint Review / Planning         | 26/10 a 30/10     |   ⏳   |
| **Sprint 3**                     | **02/11 a 22/11** |   ⏳   |
| Sprint Review                    | 23/11 a 27/11     |   ⏳   |
| Feira de Soluções                | 03/12             |   ⏳   |

---

## ⚙️ Tecnologias <a id="tech"></a>
<p>
  
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)

</p>
<p>
  
![Python](https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white)
![Flask](https://img.shields.io/badge/Flask-000000?style=flat&logo=flask&logoColor=white)

</p>
<p>
  
![SQL](https://img.shields.io/badge/SQL-4479A1?style=flat&logo=postgresql&logoColor=white)
![Google Colab](https://img.shields.io/badge/Google%20Colab-F9AB00?style=flat&logo=googlecolab&logoColor=white)

</p>

---

## 👥 Time <a id="time"></a>

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
