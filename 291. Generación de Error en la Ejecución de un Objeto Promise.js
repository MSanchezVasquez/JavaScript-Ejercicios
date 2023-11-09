// Ejercicio 291: Generación de Error en la Ejecución de un Objeto Promise.

let promesa = new Promise(function (resolve, reject) {
  throw new Error("MENSAJE: Se ha generado un error");
});

promesa
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log(error);
  });
