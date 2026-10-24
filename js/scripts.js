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

filtroUFSelect.addEventListener("change", () => {
    criarGraficos(filtroUFSelect.value);
});

// if (ufs.length > 0) {
//     selectUF.value = ufs.includes("SP") ? "SP" : ufs[0];
//     criarGraficoDensidade(selectUF.value);
// }

function criarGraficos(ufSelecionada) {
    // CRIAÇÃO DOS DADOS PARA EXIBIÇÃO
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
            // O eixo X contempla todos os anos disponíveis.
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
// }

    // graficoDensidade = new Chart(ctxDensidade, {
    //     type: "line",
    //     data: {
    //         labels: ["2022", "2023", "2024", "2025"],
    //         datasets: [
    //             {
    //                 label: "Densidade populacional",
    //                 data: montarDatasetRendaIBGE(dadosDensidade),
    //                 backgroundColor: "#10b981"
                // },
                // {
                    // label: "Dívida crítica",
                    // data: dadosDivida.map(
                    //     item => item.percentual_critica
                    // ),
                    // backgroundColor: "#ef4444"
    //             }
    //         ]
    //     },
    //     options: {
    //         ...opcoesGrafico("Renda média per capta (R$)"),
    //         scales: {
    //             ...opcoesGrafico("R$").scales,
    //             y: {
    //                 beginAtZero: true,
    //                 max: 100,
    //                 title: {
    //                     display: true,
    //                     text: "Renda média per capta (R$)"
    //                 }
    //             }
    //         }
    //     }
    // });
}

// CONSTRUTOR DOS GRÁFICOS
carregarDados();
