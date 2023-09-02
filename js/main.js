// Lanzara la moneda
function lanzarMoneda() {
    // Generar un número aleatorio entre 0 y 1
    const resultado = Math.random();
  
    // Si el resultado es mayor o igual a 0.5, es cara; de lo contrario, es sello.
    if (resultado >= 0.5) {
      return "cara";
    } else {
      return "sello";
    }
  }
  
  // Jugar de nuevo
  let jugarDeNuevo = true;
  while (jugarDeNuevo) {
    // Resultado
    const resultadoLanzamiento = lanzarMoneda();
  
    // Resultado
    const eleccionUsuario = prompt("¡Cara o sello! ¿Qué crees que salió? (cara/sello)");
    
    if (eleccionUsuario === resultadoLanzamiento) {
      alert("¡Correcto! El resultado fue " + resultadoLanzamiento);
    } else {
      alert("¡Incorrecto! El resultado fue " + resultadoLanzamiento);
    }
  
    // Preguntar al usuario 
    const jugarOtraVez = confirm("¿Quieres jugar de nuevo?");
    if (!jugarOtraVez) {
      jugarDeNuevo = false;
    }
  }
  