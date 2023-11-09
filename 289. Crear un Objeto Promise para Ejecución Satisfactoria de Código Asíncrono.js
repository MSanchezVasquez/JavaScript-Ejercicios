// Ejercicio 289: Crear un Objeto Promise para Ejecución Satisfactoria de Código Asíncrono.

let promesa = new Promise(function (resolve, reject) {
  resolve("La ejecucion del proceso ha sido satisfactoria.");
});

promesa.then(
  function (mensaje) {
    console.log(mensaje);
  },
  function (error) {
    console.log(error);
  }
);
