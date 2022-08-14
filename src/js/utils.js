function IMC(weight, height) {
    return (weight / ((height/100) ** 2)).toFixed(2)
}


function notANumber(value){
    //isNaN vai retornar TRUE ou FALSE
    // Se número = FALSE
    // Se vazio = FALSE
    // se NÃO número = TRUE
    return isNaN(value) || value == ""
}

export {IMC, notANumber}