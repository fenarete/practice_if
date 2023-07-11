/*10. Un conocido portal de educación en tecnología está ofreciendo programas para aprender a desarrollar aplicaciones. Escribe un programa que le indique a la persona interesada cuánto deberá pagar mensualmente de acuerdo a la opción elegida.
El programa educativo contempla 3 diferentes niveles, cada uno con su costo mensual: 
Course: $4999 MXN
Carrera $3999 MXN
Master: $2999 MXN
Adicionalmente preguntar si cuenta con alguna beca y aplicar el descuento correspondiente al precio final.
Beca Facebook: 20% de descuento.
Beca Google: 15% de descuento.
Beca Jesua: 50% de descuento.
Finalmente, además del precio mensual con descuento, indicar al usuario cuánto gastaría en total por el curso elegido, tomando en cuenta las siguientes duraciones:
Course: 2 meses
Carrera 6 meses
Master: 12 meses*/

let precioMensual = 0
let precioTotal = 0
const cursos = [
    {nivel: 'course',
    precio: 4999, //pesos
    duración: 2}, //meses

    {nivel: 'carrera',
    precio: 3999,
    duración: 6},

    {nivel: 'master',
    precio: 2999, 
    duración: 12}
]

const becas = new Map([['facebook', 0.80],
                        ['google', 0.85],
                        ['jesua', 0.50],
                        ['ninguna', 1]])

const nivel = prompt('¿Qué nivel deseas estudiar? Las opciones son: Course, Carrera, Master').trim().toLowerCase()
const beca = prompt('¿Tienes alguna beca? Las opciones son: Facebook, Google, Jesua, y ninguna').trim().toLowerCase()

precioMensual = cursos[cursos.indexOf(nivel)].precio * becas.get(beca)
precioTotal = precioMensual * cursos[cursos.indexOf(nivel)].duración

console.log(`Tu pago mensual sería de: $${precioMensual}, y en total pagarías: $${precioTotal}`)