var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    edad: 28
}
  
var dario = {
    nombre: 'Darío',
    apellido: 'Susnisky',
    edad: 27
}
  
/*function imprimirNombreEnMayusculas(persona) {
    console.log(persona.nombre.toUpperCase())
}*/

function imprimirNombreEnMayusculas({ nombre }) {
    console.log(nombre.toUpperCase())
}
  
imprimirNombreEnMayusculas(sacha)
imprimirNombreEnMayusculas(dario)
imprimirNombreEnMayusculas({ nombre: 'Pepito' })
imprimirNombreEnMayusculas({ apellido: 'Gomez' }) // Aqui va a dar error por que el atributo no corresponde 