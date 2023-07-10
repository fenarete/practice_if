/*4. Solicitar al usuario un número de cliente. Si el número es el 1000, imprimir 'Ganaste un premio', en caso contrario mostrar el número y el mensaje “Lo sentimos, sigue participando”.*/

let numeroCrudo = prompt('Dame el número de cliente')
numero = parseInt(numeroCrudo)

while(isNaN(numero)){
    numeroCrudo = prompt('Eso no es un número. Dame un número')
    numero = parseInt(numeroCrudo)
}

if (numero == 1_000)
    console.log('Ganaste el premio')
else
    console.log('Lo sentimos, sigue participando')