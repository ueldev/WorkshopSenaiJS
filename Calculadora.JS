# WorkshopSenaiJS
Workshop Senai - Calculadora JS

 Number(prompt("escolha mais um número."))

var resultado = null

function calculo(){
if (sinal == "+"){
    resultado = var1 + var2
}
if (sinal == "-"){
    resultado = var1 - var2
}
if (sinal == "*"){
    resultado = var1 * var2
}
if (sinal == "/"){
    resultado = var1 / var2
}
return resultado
}

calculo()

alert(var1 + " " + " " + sinal  +  " " + var2 + " = " + resultado)
