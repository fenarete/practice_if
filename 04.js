/*4. Solicitar al usuario un número de cliente. Si el número es el 1000, imprimir 'Ganaste un premio', en caso contrario mostrar el número y el mensaje “Lo sentimos, sigue participando”.*/

const numero = Number(prompt('Dame el número de cliente'))

while(isNaN(calificación))
    calificación = Number(prompt('Eso no es un número de cliente. Dame un número de cliente'))

const result = (calificación == 1_000) ? '¡Ganaste el premio!' : 'Lo sentimos, sigue participando'

console.log(result)