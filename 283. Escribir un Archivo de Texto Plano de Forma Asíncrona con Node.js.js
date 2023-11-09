// Ejercicio 283: Escribir un Archivo de Texto Plano de Forma Asíncrona con Node.js.

const fs = require("fs");
fs.appendFile("283/ex289_saludo.txt", "¡Hola JavaScript!", (error) => {
  if (error) {
    throw error;
  }
  console.log("El archivo se ha guardado con exito.");
});
