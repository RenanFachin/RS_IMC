// variáveis
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

// Constante Modal recebendo objetos que vão receber funções para serem chamadas futuramente pelo código
// ES6
const Modal = {

    // variáveis do MODAL
    wrapper: document.querySelector('.modal-wrapper'),
    message: document.querySelector('.modal-wrapper .title span'),
    buttonClose: document.querySelector('.modal-wrapper button.close'),

    open: function() {
        Modal.wrapper.classList.add('open') // Adicionando uma classe com a manipulação da DOM 
    },
    close: function() {
        Modal.wrapper.classList.remove('open')
    }
}


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


    // criando uma variável para receber o resultado da função IMC que está sendo passada as const capturadas pelo input
    const result = IMC(weight,height)
    const message = `Seu IMC é de ${result}`

    // Fazendo o modal aparecer e apresentar a mensagem
    Modal.message.innerText = `${message}` // Alterando o conteúdo de algo utilizando a manipulação da DOM
    Modal.open()

}

function IMC(weight, height) {
    return (weight / ((height/100) ** 2)).toFixed(2)
}


// Função para remover a classe OPEN do modal quando o botão de fechar for clicado
Modal.buttonClose.onclick = () => {
    Modal.close()
}

