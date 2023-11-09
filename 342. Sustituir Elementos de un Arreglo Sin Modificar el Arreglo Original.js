// Ejercicio 342: Sustituir Elementos de un Arreglo Sin Modificar el Arreglo Original.

let colores = ["Blanco", "Negro", "Rojo", "Negro", "Verde", "Azul", "Negro"];
let resultado = colores.map((color, indice, colores) => {
  return color == "Negro" ? "##" : color;
});

console.log(colores); //[ 'Blanco', 'Negro', 'Rojo', 'Negro', 'Verde',  'Azul', 'Negro' ]
console.log(resultado); //[ 'Blanco', '##', 'Rojo', '##', 'Verde', 'Azul', '##' ]
console.log(colores === resultado); //false
