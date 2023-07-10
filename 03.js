/*3. Crear un programa que determine si un número introducido en un Prompt es par o no, 
la respuesta será mostrada en un Alert.*/

let numeroCrudo = prompt('Dame un número')
numero = Number(numeroCrudo)

while(isNaN(numero)){
    numeroCrudo = prompt('Eso no es un número. Dame un número')
    numero = Number(numeroCrudo)
}

if (numero % 2 == 0)
    alert(`El número ${numero} es par`)
else
    alert(`El número ${numero} es non (impar) o decimal`)