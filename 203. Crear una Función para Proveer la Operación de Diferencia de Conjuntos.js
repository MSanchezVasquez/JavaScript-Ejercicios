// Ejercicio 203: Crear una Función para Proveer la Operación de Diferencia de Conjuntos.

Set.prototype.diferenciaDeConjuntos = function (B) {
  let conjuntoDiferencia = new Set();
  for (const e of this) {
    if (!B.has(e)) {
      conjuntoDiferencia.add(e);
    }
  }
  return conjuntoDiferencia;
};

let A = new Set([1, 2, 3, 4, 5]);
let B = new Set([4, 5, 6, 7, 8]);
let resultado = A.diferenciaDeConjuntos(B);
console.log(resultado); //Set(3) { 1, 2, 3 }

resultado = B.diferenciaDeConjuntos(A);
console.log(resultado); //Set(3) { 6, 7, 8 }
