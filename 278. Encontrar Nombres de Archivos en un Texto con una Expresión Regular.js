// Ejercicio 278: Encontrar Nombres de Archivos en un Texto con una Expresión Regular.

let texto =
  "El nombre del archivo es karl_marx_biografia.pdf. El archivo se encuentra en la carpeta de documentos.";

let patron = /([a-z_]+\.pdf)/;
let resultado = patron.exec(texto);
console.log(resultado[0]); //karl_marx_biografia.pdf
