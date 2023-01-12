function  verificaSeChutePossuiValorValido(chute) {
    const numero = +chute

    if(chuteForInvalido(numero)) {
        console.log('Valor inválido')
    }

    if(numeroMaiorOuMenorPermitido(numero)){
        console.log(`Valor inválido: O número secreto está entre ${maiorValor} e ${menorValor}`)
    }
}



function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroMaiorOuMenorPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}