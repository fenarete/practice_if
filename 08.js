/*8. Solicitar al usuario una calificación (entre 1 y 10). Luego se debe comprobar que el número efectivamente esté en ese rango, si no lo está imprima un mensaje de error. Si lo está, imprima “reprobado” si la calificación es inferior a 6, “regular” si está entre 6 y 8, “bien” si es 9, y por último, “excelente” si es 10.*/
const score = +prompt('Dame la calificación en formato numérico entre 1 y 10')
let message = ''
while(isNaN(score))
    score = +prompt('Eso no es un número. Dame la calificación en formato numérico entre 1 y 10')

if (score < 1 || score > 10)
    message = 'ERROR'
else if(score < 6)
    message = 'Reprobado'
else if(score <= 8)
    message = 'Regular'
else if(score == 9)
    message = 'Bien'
else
    message = '¡Excelente!'

console.log(message)