// Ejercicio 330: Calcular la Longitud de un Arco Circular Dado el Ángulo en Grados.

function longitudArco(grados, radio) {
  let radianes = grados * (Math.PI / 180);
  return radianes * radio;
}

let resultado = longitudArco(180, 10);
console.log(resultado);
