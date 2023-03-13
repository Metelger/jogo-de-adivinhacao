let randomNumber = document.getElementById('cpuNumber')
let attempts = document.getElementById('attempts')
let startButton = document.getElementById('start')
let validateButton = document.getElementById('validate')
let attempt = document.getElementById('inputAttempts')
let hints = document.getElementById('hints')


handleStart = () => {
    
    if(startButton.value === "Começar") {
        validateButton.disabled = false
        startButton.value = "Desistir"
        randomNumber.innerHTML = parseInt(Math.random() * 100)
    } else {
        alert(`Você desitiu... o número era: ${randomNumber.innerHTML}.\nVocê tentou ${attempts.innerHTML} vezes.`)
        startButton.value = "Começar"
        attempts.innerHTML = 0
        attempt.value = 0
        validateButton.disabled = true
        hints.innerHTML = ""
    }
}

handleClick = () => {
    if(attempt.value > 100 || attempt.value < 0){
        alert("O número inserido é inválido!\nDigite um número entre 0 e 100!")
    } else {
        n1 = Number(randomNumber.innerHTML)
        n2 = Number(attempt.value)

        if(n1 != n2){
            attempts.innerHTML = Number(attempts.innerHTML)
            attempts.innerHTML++

            n1 > n2? hints.innerHTML = "Tente um número maior" : hints.innerHTML = "Tente um número menor"
        } else {
            attempts.innerHTML = Number(attempts.innerHTML)
            attempts.innerHTML++
            startButton.value = "Começar"
            alert(`Você acertou o número que eu escolhi!\nForam necessárias ${attempts.innerHTML} tentativas.`)

            attempts.innerHTML = 0
            attempt.value = 0
            validateButton.disabled = true
            hints.innerHTML = ""

        }

        // n1 === n2? console.log("True") : console.log("False")

    }
}
