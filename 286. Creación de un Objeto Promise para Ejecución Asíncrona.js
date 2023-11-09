// Ejercicio 286: Creación de un Objeto Promise para Ejecución Asíncrona.

let promesa = new Promise(function (resolve, reject) {
  const a = 1;
  const b = 1;
  if (a == b) {
    resolve();
  } else {
    reject();
  }
});

promesa
  .then(function () {
    console.log("La ejecucion ha sido satisfactoria.");
  })
  .catch(function () {
    console.log("La ejecucion ha fallado.");
  });
