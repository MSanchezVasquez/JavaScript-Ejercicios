// Ejercicio 99: Calcular la Longitud de un Número Entero

function calLongEntero(numero) {
  let cadena = numero.toString();
  return cadena.length;
}

console.log(calLongEntero(123456789)); //9
console.log(calLongEntero(5678)); //4
console.log(calLongEntero(9513)); //4
console.log(calLongEntero(856327)); //6
