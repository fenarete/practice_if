/*6. Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es el número mayor. Considerar el caso en que 2 números sean iguales.*/

let biggest = +prompt('Dame el primer número')
while(isNaN(biggest))
    biggest = +prompt('Eso no es un número. Dame el primer número')

let numero2 = +prompt('Dame el segundo número')
while(isNaN(numero2))
    numero2 = +prompt('Eso no es un número. Dame el segundo número')

if (numero2 >= biggest)
    biggest = numero2 

let numero3 = +prompt('Dame el tercer número')
while(isNaN(numero3))
    numero3 = +prompt('Eso no es un número. Dame el segundo número')

if (numero3 >= biggest)
    biggest = numero3

console.log(`El número ${biggest} es el mayor de los tres`)