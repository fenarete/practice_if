/* 5. Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor. No considerar el caso en que ambos números son iguales.*/
let smallest = +prompt('Dame el primer número')
while(isNaN(smallest))
    smallest = +prompt('Eso no es un número. Dame el primer número')

const numero2 = +prompt('Dame el segundo número')
while(isNaN(numero2))
    numero2 = +prompt('Eso no es un número. Dame el segundo número')

if (numero2 < smallest)
    smallest = numero2

console.log(`El número ${smallest} es el menor de los dos`)