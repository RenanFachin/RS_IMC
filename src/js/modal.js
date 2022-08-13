// Constante Modal recebendo objetos que vão receber funções para serem chamadas futuramente pelo código
// ES6
export const Modal = {

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


// Função para remover a classe OPEN do modal quando o botão de fechar for clicado
Modal.buttonClose.onclick = () => {
    Modal.close()
}
