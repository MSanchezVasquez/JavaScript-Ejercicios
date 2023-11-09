// Ejercicio 315: Crear una Expresión de Función Como Callback de la Función setTimeout().

let mostrarMensaje = function () {
  console.log("Se ha ejecutado el callback de forma satisfactoria.");
};
setTimeout(mostrarMensaje, 2000);
