function  verificaSeChutePossuiValorValido(chute) {
    const numero = +chute

    if(chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div> Valor inválido</div>'
    }

    if(numeroMaiorOuMenorPermitido(numero)){
        elementoChute.innerHTML += `
        <div> Valor inválido: O número secreto está entre ${maiorValor} e ${menorValor}
        </div>`
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Você acertou! </h2>
        <h3>O número secreto era ${numeroSecreto} </h3>
        `
    }

}



function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroMaiorOuMenorPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}






