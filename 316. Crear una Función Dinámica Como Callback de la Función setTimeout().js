// Ejercicio 316: Crear una Función Dinámica Como Callback de la Función setTimeout().

let mostrarMensaje = new Function(
  "console.log('Se ha ejecutado el callback');"
);
setTimeout(mostrarMensaje, 3000);
