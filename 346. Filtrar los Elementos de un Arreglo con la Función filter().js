// Ejercicio 346: Filtrar los Elementos de un Arreglo con la Función filter().

let colores = ["Blanco", "Negro", "Rojo", "Negro", "Verde", "Azul", "Negro"];

colores.forEach((color, indice, colores) => {
  if (color == "Negro") {
    colores[indice] = "##";
  }
});

console.log(colores); //['Blanco','##','Rojo','##','Verde','Azul','##']
console.log("----------");
let resultado = colores.filter((color) => {
  return color != "##";
});
console.log(resultado); //[ 'Blanco', 'Rojo', 'Verde', 'Azul' ]
