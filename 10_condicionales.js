var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    edad: 28,
    ingeniero: false,
    cocinero: false,
    cantante: true,
    dj: false,
    guitarrista: false,
    drone: false
  }
  
  function imprimirProfesiones(persona) {
    console.log(`${persona.nombre} es:`)
  
    if (persona.ingeniero) {
      console.log('Ingeniero')
    } 
  
    if (persona.cocinero) {
      console.log('Cocinero')
    }
  
    if (persona.dj) {
      console.log('DJ')
    }
  
    if (persona.cantante) {
      console.log('Cantante')
    }
  
    if (persona.guitarrista) {
      console.log('Guitarrista')
    }
  
    if (persona.drone) {
      console.log('Piloto de drone')
    }  
  }
  
  imprimirProfesiones(sacha)