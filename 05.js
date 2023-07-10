/* 5. Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor. No considerar el caso en que ambos números son iguales.*/
let numeroCrudo = prompt('Dame el número de cliente')
numero = Number(numeroCrudo)

while(isNaN(numero)){
    numeroCrudo = prompt('Eso no es un número de cliente. Dame un número de cliente')
    numero = Number(numeroCrudo)
}

if (numero == 1_000)
    console.log('¡Ganaste el premio!')
else
    console.log('Lo sentimos, sigue participando')