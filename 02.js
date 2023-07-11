/*2. Solicitar al usuario un número, y determinar si es divisible entre dos o no. Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x núm no es divisible entre 2”. */

let calificación = +prompt('Dame un número')

while(isNaN(calificación))
    calificación = +prompt('Eso no es un número. Dame un número')
    
if (calificación % 2 == 0)
    console.log(`El número ${calificación} es divisible entre 2`)
else
    console.log(`El número ${calificación} no es divisible entre 2`)