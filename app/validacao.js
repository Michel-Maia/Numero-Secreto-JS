function  verificaSeChutePossuiValorValido(chute) {
    const numero = +chute

    if(chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div> Valor inválido</div>'
        return
    }

    if(numeroMaiorOuMenorPermitido(numero)){
        elementoChute.innerHTML += `
        <div> Valor inválido: O número secreto está entre ${maiorValor} e ${menorValor}
        </div>`
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Você acertou! </h2>
        <h3>O número secreto era ${numeroSecreto} </h3>
        <button id="jogar-novamente" class="btn-jogar"> JOgar novamente </button>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-sharp fa-solid fa-arrow-down"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-sharp fa-solid fa-arrow-up"></i></div>
        `
    }


}



function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroMaiorOuMenorPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}


document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})



