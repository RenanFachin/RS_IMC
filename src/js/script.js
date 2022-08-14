// Importando
import { Modal } from './modal.js'
import { IMC } from './imc.js'
import { AlertError } from './alert-error.js'

// variáveis
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')


// Fazendo o submit do formulário
// 3 maneiras de criar e atribuir a um evento
// maneira 1: form.onsubmit = function() {}

// maneira 2: form.onsubmit = () => {}

// maneira 3: form.onsubmit = handleSubmit 

// Na maneira 3, teria que se criar uma função chamada handleSubmit
// function handleSubmit(){}

form.onsubmit = function(event) {
    // Fazendo o submit não ter o seu funcionamento natural
    // Fazendo com que o formulário não seja recarregado totalmente a cada submit
    // O event foi criado só para poder atribuir esse preventDefault
    event.preventDefault();

    const weight = inputWeight.value
    const height = inputHeight.value
    // .value é o jeito com que pegamos o que digitado no input

    // Checando se é número
    // Se um ou outro for verdadeiro (o value não é um número) ele vai mostrar um erro
    // Se um dos dois returnar true é pq não temos um número digitado no input
    const showAlertError = notANumber(weight) || notANumber(height)

    if(showAlertError){
        AlertError.open()
        return;
    }

    AlertError.close()

    // criando uma variável para receber o resultado da função IMC que está sendo passada as const capturadas pelo input
    const result = IMC(weight,height)
    const message = `Seu IMC é de ${result}`

    // Fazendo o modal aparecer e apresentar a mensagem
    Modal.message.innerText = `${message}` // Alterando o conteúdo de algo utilizando a manipulação da DOM
    Modal.open()

}




function notANumber(value){
    //isNaN vai retornar TRUE ou FALSE
    // Se número = FALSE
    // Se vazio = FALSE
    // se NÃO número = TRUE
    return isNaN(value) || value == ""
}