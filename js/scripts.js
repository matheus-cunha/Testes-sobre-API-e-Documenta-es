"use strict";

let graficoInadimplencia = null;
let graficoDensidade = null;
let graficoDivida = null;
let dadosUF = [];
let dadosDensidade = [];

async function carregarDados() {
    const resposta = await fetch("./js/Dados_SCR_2026.json");
    const json = await resposta.json();
    dadosUF = json.ufs;

    const respostaIBGE = await fetch("./js/Dados_IBGE.json");
    const jsonIBGE = await respostaIBGE.json();
    dadosDensidade = jsonIBGE;

    criarGraficos();    
}

function montarDatasetRendaIBGE(dados, ufSelecionada) {
    const anos = [
        "Renda-per-capta-2022",
        "Renda-per-capta-2023",
        "Renda-per-capta-2024",
        "Renda-per-capta-2025"
    ];
    const estado = dados.find(item => item.UF === ufSelecionada);
    if (!estado) return [];
    return anos.map(ano => Number(estado[ano]));
}

function montarDatasetDensidadeIBGE(dados, ufSelecionada) {
    const anos = [
        "Populacao-estado-2022",
        "Populacao-estado-2023",
        "Populacao-estado-2024",
        "Populacao-estado-2025",
        "Populacao-estado-2026"
    ];
    const estado = dados.find(item => item.UF === ufSelecionada);
    if (!estado) return [];
    return anos.map(ano => Number(estado[ano]));
}

function opcoesGrafico(eixoY) {
    return {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
            mode: "index",
            intersect: false
        },
        plugins: {
            legend: {
                position: "top"
            }
        },
        scales: {
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: eixoY
                }
            }
        }
    };
}

// LISTNER PARA ALTERAÇÕES
filtroUFSelect.addEventListener("change", () => {
    criarGraficos(filtroUFSelect.value);
    // CODIGO TEMPORARIO SPRINT 2
    atualizarScore(temporarioForcarScoreUF(filtroUFSelect.value));
});

// CONSTRUTOR DOS DADOS PARA EXIBIÇÃO
function criarGraficos(ufSelecionada) {    
    const dadosOrdenados = [...dadosUF].sort((a, b) => b.inadimplencia_bi - a.inadimplencia_bi);
    const ufs = dadosOrdenados.map(item => item.uf);
    const ctxInadimplencia = document.getElementById("graficoInadimplencia");
    if (graficoInadimplencia) {graficoInadimplencia.destroy();};

    const dadosDivida = [...dadosUF].sort((a, b) => a.percentual_critica - b.percentual_critica);
    const ctxDivida = document.getElementById("graficoDivida");
    if (graficoDivida) {graficoDivida.destroy();}

    const ctxDensidade = document.getElementById("graficoDensidade");
    const anosRenda = ["2022", "2023", "2024", "2025"];
    const anosPopulacao = ["2022", "2023", "2024", "2025", "2026"];
    const renda = montarDatasetRendaIBGE(dadosDensidade,ufSelecionada);
    const populacao = montarDatasetDensidadeIBGE(dadosDensidade,ufSelecionada);
    if (graficoDensidade) {graficoDensidade.destroy();}
    
    // CRIAÇÃO DO GRÁFICO DE INADIMPLENCIA
    graficoInadimplencia = new Chart(ctxInadimplencia, {
        type: "bar",
        data: {
            labels: ufs,
            datasets: [
                {
                    label: "Carteira inadimplente",
                    data: dadosOrdenados.map(
                        item => item.inadimplencia_bi
                    ),
                    backgroundColor: "#ef4444"
                },
                {
                    label: "A vencer em até 90 dias",
                    data: dadosOrdenados.map(
                        item => item.a_vencer_90d_bi
                    ),
                    backgroundColor: "#4f46e5"
                }
            ]
        },
        options: opcoesGrafico("Valor (R$ bilhões)")
    });

    // CRIAÇÃO DO GRÁFICO DE DIVIDA
    graficoDivida = new Chart(ctxDivida, {
        type: "bar",
        data: {
            labels: dadosDivida.map(item => item.uf),
            datasets: [
                {
                    label: "Dívida saudável",
                    data: dadosDivida.map(
                        item => item.percentual_saudavel
                    ),
                    backgroundColor: "#10b981"
                },
                {
                    label: "Dívida crítica",
                    data: dadosDivida.map(
                        item => item.percentual_critica
                    ),
                    backgroundColor: "#ef4444"
                }
            ]
        },
        options: {
            ...opcoesGrafico("Percentual da carteira ativa (%)"),
            scales: {
                ...opcoesGrafico("%").scales,
                y: {
                    beginAtZero: true,
                    max: 100,
                    title: {
                        display: true,
                        text: "Percentual da carteira ativa (%)"
                    }
                }
            }
        }
    });

    graficoDensidade = new Chart(ctxDensidade, {
        type: "line",
        data: {
            labels: anosPopulacao,
            datasets: [
                {
                    label: "Renda per capita (R$)",
                    data: [...renda, null],
                    borderColor: "#10b981",
                    backgroundColor: "#10b981",
                    yAxisID: "yRenda",
                    tension: 0.3,
                    spanGaps: false
                },
                {
                    label: "População (habitantes)",
                    data: populacao,
                    borderColor: "#4f46e5",
                    backgroundColor: "#4f46e5",
                    yAxisID: "yPopulacao",
                    tension: 0.3
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                mode: "index",
                intersect: false
            },
            plugins: {
                title: {
                    display: true,
                    text: `Renda e população — ${ufSelecionada}`
                },
                legend: {
                    position: "top"
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: "Ano"
                    }
                },
                yRenda: {
                    type: "linear",
                    position: "left",
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: "Renda per capita (R$)",
                        color: "#10b981"
                    },
                    ticks: {
                        color: "#10b981"
                    }
                },
                yPopulacao: {
                    type: "linear",
                    position: "right",
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: "População (habitantes)",
                        color: "#4f46e5"
                    },
                    ticks: {
                        color: "#4f46e5"
                    },
                    grid: {
                        drawOnChartArea: false
                    }
                }
            }
        }
    });
}


// CONSTRUTOR DOS GRÁFICOS
carregarDados();


// TEMPORÁRIO - CONTROLE DE SCORE POR INPUT MANUAL
// scoreBarControl.addEventListener('input', function() {
//     const score = document.getElementById('scoreBarControl').value;
//     atualizarScore(score);
// });

function atualizarScore(score){
    document.getElementById('scoreBar').style.width = (score+'%');
    const progressBar =  document.getElementById('scoreBar');
        progressBar.classList.remove(
            "bg-warning",
            "bg-info",
            "bg-success",
            "bg-danger"
        );
        progressBar.innerText  = score;
        if (score < 20) {
            progressBar.classList.add("bg-danger");
        } else if (score < 40) {
            progressBar.classList.add("bg-warning");
        } else if (score < 75) {
            progressBar.classList.add("bg-info");
        } else {
            progressBar.classList.add("bg-success");
        }
};

function temporarioForcarScoreUF(ufSelecionada){
  switch (ufSelecionada) {
        case "Acre":
            return 45;
        case "Alagoas":
            return 65;
        case "Amapa":
            return 60;
        case "Amazonas":
            return 45;
        case "Bahia":
            return 35;
        case "Ceara":
            return 58;
        case "Distrito Federal":
            return 95;
        case "Espirito Santo":
            return 90;
        case "Goias":
            return 90;
        case "Maranhao":
            return 65;
        case "Mato Grosso":
            return 55;
        case "Mato Grosso do Sul":
            return 50;
        case "Minas Gerais":
            return 85;
        case "Para":
            return 80;
        case "Paraiba":
            return 70;
        case "Parana":
            return 95;
        case "Pernambuco":
            return 75;
        case "Piaui":
            return 54;
        case "Rio de Janeiro":
            return 75;
        case "Rio Grande do Norte":
            return 70;
        case "Rio Grande do Sul":
            return 95;
        case "Rondonia":
            return 65;
        case "Roraima":
            return 50;
        case "Santa Catarina":
            return 95;
        case "Sao Paulo":
            return 90;
        case "Sergipe":
            return 45;
        case "Tocantins":
            return 50;
        default:
            return 0;
    }
}