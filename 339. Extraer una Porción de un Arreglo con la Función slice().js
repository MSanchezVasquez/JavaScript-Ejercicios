// Ejercicio 339: Extraer una Porción de un Arreglo con la Función slice().

let colores = ["Blanco", "Negro", "Rojo", "Verde", "Azul", "Gris", "Violeta"];

let coloresPrimarios = colores.slice(
  colores.indexOf("Rojo"),
  colores.indexOf("Azul") + 1
);

console.log(coloresPrimarios); //[ 'Rojo', 'Verde', 'Azul' ]
