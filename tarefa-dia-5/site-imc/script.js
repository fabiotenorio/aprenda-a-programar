

const calculoIMC = (peso, altura) => {
    //Faça o cálculo do IMC nesta função. Não esqueça de retornar o valor do cálculo com o comando 'return'.
    imc = peso / (altura * altura)
    return imc
}

const resultadoIMC = (indiceIMC) => {
    //Retorne o resultado do IMC nesta função. A função deve retornar "Baixo peso", "Normal", "Sobrepeso" ou "Obesidade" de acordo com o índice (indiceIMC) recebido como parâmetro. Ou seja, utilize comandos 'if' para verificar em qual faixa o índice está para retornar o texto adequado.
    if (imc < 18.5) {
        faixaIMC = "Baixo peso"
    } else if (imc >= 18.5 && imc <= 24.99) {
        faixaIMC = "Normal"
    } else if (imc >= 25 && imc <= 29.99) {
        faixaIMC = "Sobrepeso"
    } else {
        faixaIMC = "Obesidade"
    }
    return faixaIMC
}

function mostrarResultadoIMC() {
    peso = Number(document.getElementById("peso").value)
    altura = Number(document.getElementById("altura").value)

    imc = calculoIMC(peso, altura)
    document.getElementById("resultado").innerText = "O seu IMC é : " + imc

    faixaIMC = resultadoIMC(imc)
    alert("Sua faixa de IMC é: " + faixaIMC)
}

