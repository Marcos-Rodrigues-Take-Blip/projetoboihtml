// JSONs (substitua pelos seus JSONs completos)
const remessasData = {
    "remessas_internacionais": [
        {"id_remessa": "MBI-2025-001", "destino": "Japão", "custo_frete": {"valor": 160000}, "tempo_estimado_transporte": "26 dias"},
        {"id_remessa": "MBI-2025-002", "destino": "Alemanha", "custo_frete": {"valor": 115000}, "tempo_estimado_transporte": "20 dias"},
        {"id_remessa": "MBI-2025-003", "destino": "Coreia do Sul", "custo_frete": {"valor": 145000}, "tempo_estimado_transporte": "22 dias"},
        {"id_remessa": "MBI-2025-004", "destino": "Emirados Árabes Unidos", "custo_frete": {"valor": 98000}, "tempo_estimado_transporte": "17 dias"},
        {"id_remessa": "MBI-2025-005", "destino": "Reino Unido", "custo_frete": {"valor": 120000}, "tempo_estimado_transporte": "20 dias"},
        {"id_remessa": "MBI-2025-006", "destino": "Austrália", "custo_frete": {"valor": 135000}, "tempo_estimado_transporte": "25 dias"},
        {"id_remessa": "MBI-2025-007", "destino": "Canadá", "custo_frete": {"valor": 125000}, "tempo_estimado_transporte": "20 dias"},
        {"id_remessa": "MBI-2025-008", "destino": "Rússia", "custo_frete": {"valor": 170000}, "tempo_estimado_transporte": "27 dias"},
        {"id_remessa": "MBI-2025-009", "destino": "Argentina", "custo_frete": {"valor": 45000}, "tempo_estimado_transporte": "7 dias"},
        {"id_remessa": "MBI-2025-010", "destino": "África do Sul", "custo_frete": {"valor": 140000}, "tempo_estimado_transporte": "20 dias"}
    ]
};

const operacionalData = {
    "frigorifico": {
        "unidades_frigorificas": [
            {"nome": "Unidade Salvador", "faturamento_semestre": 4229217.07},
            {"nome": "Unidade Fortaleza", "faturamento_semestre": 3877455.69},
            {"nome": "Unidade Recife", "faturamento_semestre": 3525094.31},
            {"nome": "Unidade São Luís", "faturamento_semestre": 3173332.93}
        ]
    },
    "cortes_de_carne": [
        {"tipo": "Picanha", "quantidade_distribuida_kg": 50000},
        {"tipo": "Costela", "quantidade_distribuida_kg": 70000},
        {"tipo": "Filé Mignon", "quantidade_distribuida_kg": 32000},
        {"tipo": "Coxão Mole", "quantidade_distribuida_kg": 60000},
        {"tipo": "Fraldinha", "quantidade_distribuida_kg": 45000}
    ]
};

// Gráfico de Custo de Frete por Destino
const freteCtx = document.getElementById('freteChart').getContext('2d');
new Chart(freteCtx, {
    type: 'bar',
    data: {
        labels: remessasData.remessas_internacionais.map(r => r.destino),
        datasets: [{
            label: 'Custo de Frete (USD)',
            data: remessasData.remessas_internacionais.map(r => r.custo_frete.valor),
            backgroundColor: '#E30613', // Vermelho Masterboi
            borderColor: '#B0040F', // Vermelho mais escuro para borda
            borderWidth: 1
        }]
    },
    options: {
        scales: { y: { beginAtZero: true } },
        plugins: { title: { display: true, text: 'Custo de Frete por Destino' } }
    }
});

// Gráfico de Tempo Estimado de Transporte
const tempoCtx = document.getElementById('tempoTransporteChart').getContext('2d');
new Chart(tempoCtx, {
    type: 'bar',
    data: {
        labels: remessasData.remessas_internacionais.map(r => r.destino),
        datasets: [{
            label: 'Tempo Estimado (dias)',
            data: remessasData.remessas_internacionais.map(r => parseInt(r.tempo_estimado_transporte)),
            backgroundColor: '#FF4D4F', // Vermelho mais claro
            borderColor: '#E30613', // Vermelho Masterboi para borda
            borderWidth: 1
        }]
    },
    options: {
        scales: { y: { beginAtZero: true } },
        plugins: { title: { display: true, text: 'Tempo Estimado de Transporte' } }
    }
});

// Gráfico de Faturamento por Unidade (com cores variadas)
const faturamentoCtx = document.getElementById('faturamentoUnidadesChart').getContext('2d');
new Chart(faturamentoCtx, {
    type: 'pie',
    data: {
        labels: operacionalData.frigorifico.unidades_frigorificas.map(u => u.nome),
        datasets: [{
            label: 'Faturamento (R$)',
            data: operacionalData.frigorifico.unidades_frigorificas.map(u => u.faturamento_semestre),
            backgroundColor: [
                '#E30613', // Vermelho Masterboi
                '#F4C430', // Amarelo suave
                '#48BB78', // Verde claro
                '#4299E1'  // Azul suave
            ]
        }]
    },
    options: {
        plugins: { title: { display: true, text: 'Faturamento por Unidade (Semestre)' } }
    }
});

// Gráfico de Quantidade Distribuída por Corte de Carne
const cortesCtx = document.getElementById('cortesCarneChart').getContext('2d');
new Chart(cortesCtx, {
    type: 'bar',
    data: {
        labels: operacionalData.cortes_de_carne.map(c => c.tipo),
        datasets: [{
            label: 'Quantidade (kg)',
            data: operacionalData.cortes_de_carne.map(c => c.quantidade_distribuida_kg),
            backgroundColor: '#E30613', // Vermelho Masterboi
            borderColor: '#B0040F', // Vermelho mais escuro para borda
            borderWidth: 1
        }]
    },
    options: {
        scales: { y: { beginAtZero: true } },
        plugins: { title: { display: true, text: 'Quantidade Distribuída por Corte de Carne' } }
    }
});