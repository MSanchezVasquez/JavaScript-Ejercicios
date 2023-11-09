// Ejercicio 267: Crear una Implementación Básica del Patrón Callback.

function exito() {
  console.log("La funcion se ejecuto de forma satisfactoria.");
}

function fallo() {
  console.error("La funcion falló.");
}

function ejecutarProceso(nombre, exito, fallo) {
  if (nombre == "Moises") {
    exito();
  } else {
    fallo();
  }
}

ejecutarProceso("Moises", exito, fallo); //La funcion se ejecuto de forma satisfactoria.

ejecutarProceso("Edward", exito, fallo); //La funcion falló.
