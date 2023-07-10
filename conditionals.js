/* 1. Solicitar al usuario que responda a la pregunta (“¿Eres bellisimo/a?”), en caso de contestar sí, responder “Ciertamente”, en caso de contestar no, responder: “No te creo”.*/

let respuesta = 'Quien sabe'
let respuestaCruda = 'Quien sabe'

while (respuesta != 'si' && respuesta != 'sí' && respuesta != 'no'){
    respuestaCruda = prompt('Responde sí o no. ¿Eres bellísimo(a)?')
    respuesta = respuestaCruda.trim().toLowerCase()
}

if (respuesta == 'sí' || respuesta == 'si')
    console.log('Ciertamente')
else
    console.log('No te creo')


/*2. Solicitar al usuario un número, y determinar si es divisible entre dos o no. Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x núm no es divisible entre 2”. */