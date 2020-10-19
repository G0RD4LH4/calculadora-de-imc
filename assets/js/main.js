const form = document.querySelector('.form')

const calculationResult = []

form.addEventListener('submit', function (event) {
    event.preventDefault()

    const inputWeight = event.target.querySelector('.weight')
    const inputHeight = event.target.querySelector('.height')

    const weight = Number(inputWeight.value)
    const height = Number(inputHeight.value)

    if(!weight) {
        setResult('Peso inválido.', false)
        return
    }

    if(!height) {
        setResult('Altura inválida.', false)
        return
    }

    const imc = getIMC(weight, height)
    const imcLevel = getIMCLevel(imc)
    
    const message = `Seu IMC é: ${imc} | Seu Nivel é: ${imcLevel}.`

    setResult(message, true)
})

function getIMCLevel(imc) {
    if(imc <= 18.5) {
        return 'Abaixo do Peso'
    } else if(imc >= 18.6 && imc <= 24.9) {
        return 'Peso Normal'
    } else if(imc >= 25 && imc <= 29.9) {
        return 'Sobrepeso'
    } else if(imc >= 30 && imc <= 34.9) {
        return 'Obesidade grau 1'
    } else if(imc >= 35 && imc <= 39.9) {
        return 'Obesidade grau 2'
    } else {
        return 'Obesidade grau 3'
    }
}

function getIMC(weight, height) {
    const imc = weight / height ** 2
    return imc.toFixed(2)
}

function setResult(message, isValid) {
    const result = document.querySelector('.result')
    result.innerHTML = ''

    const paragraph = document.createElement('p')

    if(isValid) {
        paragraph.classList.add('paragraph-good')
    } else {
        paragraph.classList.add('paragraph-bad')
    }

    paragraph.innerHTML = message
    result.appendChild(paragraph)
}