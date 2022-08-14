import { Modal } from './modal.js'
import { calculateIMC, notANumber } from './utils.js'
import { AlertError } from './alert-error.js'

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

form.onsubmit = function(event) {
    event.preventDefault();

    const weight = inputWeight.value
    const height = inputHeight.value

    const weightOrHeightisNotANumber = notANumber(weight) || notANumber(height)

    if(weightOrHeightisNotANumber){
        AlertError.open()
        return;
    }
    AlertError.close()


    const result = calculateIMC(weight,height)
    displayResultMessage(result)
}

function displayResultMessage(result){
    const message = `Seu IMC é de ${result}`

    Modal.message.innerText = `${message}`
    Modal.open()
}


// DESAFIO
// Fechar a janela de erro ao digitar no campo novamente
//.oninput vai perceber se está sendo alterado algo no input e vai disparar a função
inputWeight.oninput = () => {
    AlertError.close()
}

inputHeight.oninput = () => {
    AlertError.close()
}