// Ejercicio 343: Simplificar la condición de evaluación para efectuar un reemplazo en un arreglo.

function marcarElementos(color, indice, colores) {
  color == "Negro" && (colores[indice] = "##");
}

let colores = ["Blanco", "Negro", "Rojo", "Negro", "Verde", "Azul", "Negro"];

colores.forEach(marcarElementos);
console.log(colores); /*[
  'Blanco', '##',
  'Rojo',   '##',
  'Verde',  'Azul',
  '##'
]*/
