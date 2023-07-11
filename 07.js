/*7. Requerir al usuario que ingrese un día de la semana e imprimir un mensaje si es lunes, otro mensaje diferente si es viernes, otro mensaje diferente si es sábado o domingo. Si el día ingresado no es ninguno de esos, imprimir otro mensaje.*/

let daysOfWeek = ['lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 'domingo']
let day = prompt('Dame un día de la semana').trim().toLowerCase()
let message = ''

if (daysOfWeek.indexOf(day) == 0)
    message = 'A darle que es mole de holla'
else if (daysOfWeek.indexOf(day) == 4)
    message = 'Es viernes y el cuerpo lo sabe'
else if (daysOfWeek.indexOf(day) == 5 || daysOfWeek.indexOf(day) == 6)
    message = 'Fin de semana. A descansar'
else if (daysOfWeek.indexOf(day) == -1)
    message = 'Eso no es un día'

console.log(message)