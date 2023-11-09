// Ejercicio 200: Crear una Función para Proveer la Función de Unión entre Conjuntos.

Set.prototype.union = function (otroConjunto) {
  let conjuntoUnion = new Set();
  for (const e of this) {
    conjuntoUnion.add(e);
  }

  for (const e of otroConjunto) {
    conjuntoUnion.add(e);
  }

  return conjuntoUnion;
};

let A = new Set([1, 2, 3, 4, 5, 6]);
let B = new Set([5, 6, 7, 8, 9, 10]);

let resultado = A.union(B);
console.log(resultado); //Set(10) { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 }

resultado = B.union(A);
console.log(resultado); //Set(10) { 5, 6, 7, 8, 9, 10, 1, 2, 3, 4 }
