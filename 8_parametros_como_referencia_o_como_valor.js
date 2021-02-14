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

//Con esta funcion se realiza la modificación dentro de la función 
//pero al llamar al objeto sigue permaneciendo con las mismas caracteristicas
function cumpleanos(persona) {
  return {
    ...persona,
    edad: persona.edad + 1
  }
}

//Con esta funcion se realiza la modificacion dentro de la función
//pero al llamar al objeto tambien cambio su edad
function cumpleanos(persona) {
  persona.edad +=1
}