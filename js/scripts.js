async function lerJsonEndpoint() {
    //Leitura do endpoint
    try {
        const resposta = await fetch(
            'https://6aa1d1d4ccb3db9689a5cff3.mockapi.io/densidade-ibge-2026'
        );
        if (!resposta.ok) {
            throw new Error(`Erro na requisição: ${resposta.status}`);
        }
        const dados = await resposta.json();
        return dados;
    } catch (erro) {
        console.error('Falha ao buscar o JSON:', erro);
        return [];
    }
}

async function prepararDados() {
    const dfDados = await lerJsonEndpoint();
    const anos = ["2022", "2023", "2024", "2025"];

    const ctx = document.getElementById("graficoDensidade");
    const ufSelector = document.getElementById("ufSelector");

    function montarDatasets(dados) {
        return dados.map(item => ({
            label: item.UF,
            data: [
                // item['UF'],
                item["Renda-per-capta-2022"],
                item["Renda-per-capta-2023"],
                item["Renda-per-capta-2024"],
                item["Renda-per-capta-2025"]
                // item["Renda-per-capta-2026"]
            ].map(Number),
            borderWidth: 2
    
        }));
    }

    const chart = new Chart(ctx, {
        type: "line",
        data: {
            labels: anos,
            datasets: montarDatasets(dfDados)
        },
        options: {
            responsive: true,
            interaction: {
                intersect: false,
                mode: "index"
            },
            plugins: {
                title: {
                    display: true,
                    text: "Evolução da renda per capita por UF"
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: "Renda per capita"
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: "Ano"
                    }
                }
            }
        }
    });
    
    // console.log("UFs recebidas:", dfDados.map(item => item.UF));
    ufSelector.addEventListener("change", () => {
        const ufSelecionada = ufSelector.value;

        const dadosFiltrados = dfDados.filter(
            item => item.UF === ufSelecionada
        );

        chart.data.datasets = montarDatasets(dadosFiltrados);
        chart.update();
    });
}

prepararDados();