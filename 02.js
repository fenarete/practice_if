/*2. Solicitar al usuario un número, y determinar si es divisible entre dos o no. Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x núm no es divisible entre 2”. */

let numeroCrudo = prompt('Dame un número')
numero = parseInt(numeroCrudo)

while(isNaN(numero)){
    numeroCrudo = prompt('Eso no es un número. Dame un número')
    numero = parseInt(numeroCrudo)
}

if (numero % 2 == 0)
    console.log(`El número ${numero} es divisible entre 2`)
else
    console.log(`El número ${numero} no es divisible entre 2`)