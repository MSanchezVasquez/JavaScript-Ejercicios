// Ejercicio 201: Crear una Función para Proveer la Operación de Intersección Conjuntos.

Set.prototype.intersecion = function (otroConjunto) {
  let conjuntoInterseccion = new Set();
  for (const e of otroConjunto) {
    if (this.has(e)) {
      conjuntoInterseccion.add(e);
    }
  }
  return conjuntoInterseccion;
};

let A = new Set([1, 2, 3, 4, 5]);
let B = new Set([2, 4, 6, 8, 10]);

let intersecion = A.intersecion(B);
console.log(intersecion); //Set(2) { 2, 4 }

let C = new Set([0, 11, 13]);
intersecion = A.intersecion(C);
console.log(intersecion); //Set(0) {}
