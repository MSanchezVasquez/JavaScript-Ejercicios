// Ejercicio 287: Crear un Archivo de Texto Plano usando un Objeto Promise en Node.js.

const { error } = require("console");
const { errorMonitor } = require("events");
const fs = require("fs");
let promesaEscrituraArchivo = new Promise((resolve, reject) => {
  fs.writeFile("ex313_archivo_texto.txt", "Node.js v. 10.00", (error) => {
    if (error) {
      reject(error);
    } else {
      resolve();
    }
  });
});

promesaEscrituraArchivo
  .then(() => {
    console.log("La escritura del archivo ha sido satisfactoria.");
  })
  .catch((error) => {
    console.log("Ha ocurrido un error: ", error);
  });
