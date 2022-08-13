function IMC(weight, height) {
    return (weight / ((height/100) ** 2)).toFixed(2)
}

// Exportando a função para ser utilizada no script.js
export {IMC}