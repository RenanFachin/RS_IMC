// variáveis
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

// variáveis do MODAL
const modalWrapper = document.querySelector('.modal-wrapper')
const modalMessage = document.querySelector('.modal-wrapper .title span')
const modalBtnClose = document.querySelector('.modal-wrapper button.close')


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
    modalMessage.innerText = `${message}` // Alterando o conteúdo de algo utilizando a manipulação da DOM
    modalWrapper.classList.add('open') // Adicionando uma classe com a manipulação da DOM 
}

function IMC(weight, height) {
    return (weight / ((height/100) ** 2)).toFixed(2)
}


// Função para remover a classe OPEN do modal quando o botão de fechar for clicado
modalBtnClose.onclick = () => {
    modalWrapper.classList.remove('open')
}

