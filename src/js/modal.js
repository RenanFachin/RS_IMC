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

Modal.buttonClose.onclick = () => {
    Modal.close()
}

window.addEventListener('keydown', handleKeyDown)

export function handleKeyDown(event){
    // Quando a tecla ESCAPE (esc) for clicada acontecerá ...
    if(event.key === 'Escape'){
        Modal.close()
    }
}