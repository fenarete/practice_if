/*9. Escribe un programa que responda a un usuario que quiere comprar un helado en una conocida marca de comida rápida cuánto le costará en función del topping que elija.
El helado sin topping cuesta 50 MXN.
El topping de oreo cuesta 10 MXN.
El topping de KitKat cuesta 15 MXN.
El topping de brownie cuesta 20 MXN.
En caso de no disponer del topping solicitado por el usuario, el programa le indicará “no tenemos este topping, lo sentimos.” y a continuación le informará el precio del helado sin ningún topping.*/

const prices = new Map([['oreo', 10],
                        ['kitkat', 15],
                        ['brownie', 20],
                        ['ninguno', 0]])

const topping = prompt('Escribe el topping que quieres. Las opciones son: ninguno, oreo, kitkat y brownie').trim().toLowerCase()
const precio = 50 + prices.get(topping)
if(isNaN(precio))
    console.log('No tenemos ese topping')
else
    console.log(`El precio total es: $${precio}`)