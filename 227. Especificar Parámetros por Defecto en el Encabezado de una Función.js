// Ejercicio 227: Especificar Parámetros por Defecto en el Encabezado de una Función.

function mostrarMensaje(texto) {
  texto = typeof texto !== "undefined" ? texto : "valor por defecto";
  console.log(texto);
}

mostrarMensaje(); //valor por defecto
mostrarMensaje("JavaScript is awesome"); //JavaScript is awesome

//ES6:
console.log("--------");
function visualizarMensaje(texto = "valor por defecto") {
  console.log(texto);
}
visualizarMensaje(); //valor por defecto
visualizarMensaje("JavaScript is cool"); //JavaScript is cool
