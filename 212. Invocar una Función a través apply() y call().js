// Ejercicio 212: Invocar una Función a través apply() y call().

function sumar(a, b) {
  return a + b;
}
console.log(sumar(2, 3)); //5

//Otra forma de invocar
console.log(sumar.apply(null, [2, 3])); //5
//Otra forma de invocar
console.log(sumar.call(null, 2, 3)); //5
