/* 1. Solicitar al usuario que responda a la pregunta (“¿Eres bellisimo/a?”), en caso de contestar sí, responder “Ciertamente”, en caso de contestar no, responder: “No te creo”.*/

let respuesta = 'Quien sabe'

while (respuesta != 'si' && respuesta != 'sí' && respuesta != 'no')
    respuesta = prompt('Responde sí o no. ¿Eres bellísimo(a)?').trim().toLowerCase()

if (respuesta == 'sí' || respuesta == 'si')
    console.log('Ciertamente')
else
    console.log('No te creo')