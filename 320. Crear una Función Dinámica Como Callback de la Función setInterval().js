// Ejercicio 320: Crear una Función Dinámica Como Callback de la Función setInterval().

let mostrarMensaje = new Function(
  "console.log('Se ha ejecutado el callback.')"
);
setInterval(mostrarMensaje, 2000);
