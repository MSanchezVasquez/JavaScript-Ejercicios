// Ejercicio 202: Crear una Función para Proveer la Operación de Subconjunto.

Set.prototype.subconjunto = function (otroConjunto) {
  if (this.size > otroConjunto.size) {
    return false;
  } else {
    for (const e of this) {
      if (!otroConjunto.has(e)) {
        return false;
      }
    }
    return true;
  }
};

let A = new Set([1, 2, 3, 4, 5]);
let B = new Set([1, 2]);

let resultado = B.subconjunto(A);
console.log(resultado); //true

resultado = A.subconjunto(B);
console.log(resultado); //false

let C = new Set([0, 1, 2]);
