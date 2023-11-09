// Ejercicio 91: Uso de la funcion toExponential de la clase Number.

function expo(x, y) {
  return Number.parseFloat(x).toExponential(y);
}

console.log(expo(123456, 2)); //1.23e+5
console.log(expo("Oink")); //NaN
