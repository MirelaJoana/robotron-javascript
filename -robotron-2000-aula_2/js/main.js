const controle = document.querySelectorAll("[data-controle]")
const estatisticas = document.querySelectorAll("[data-estatistica]")

const pecas = {
    "bracos": {
        "forca": 5,
        "poder": 5,
        "energia": 5,
        "velocidade": 5,
    },
    "blindagem": {
        "forca": 5,
        "poder": 5,
        "energia": 5,
        "velocidade": 5,
    },
    "nucleos": {
        "forca": 5,
        "poder": 5,
        "energia": 5,
        "velocidade": 5,
    },
    "pernas": {
        "forca": 5,
        "poder": 5,
        "energia": 5,
        "velocidade": 5,
    },
    "foguetes": {
        "forca": 5,
        "poder": 5,
        "energia": 5,
        "velocidade": 5,
    }
}

controle.forEach( (elemento) => {
    elemento.addEventListener('click', (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
        atualizaEstatisticas(evento.target.dataset.peca)
    })
})

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]")

    if(operacao === "-") {
        peca.value = parseInt(peca.value) - 1
    } else {
        peca.value = parseInt(peca.value) + 1
    }
}

function atualizaEstatisticas(peca) {
    estatisticas.forEach( (elemento ) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    })
}