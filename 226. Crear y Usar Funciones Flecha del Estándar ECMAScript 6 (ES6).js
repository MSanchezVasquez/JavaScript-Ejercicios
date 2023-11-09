// Ejercicio 226: Creacion y uso de funciones flecha del estandar ES6.

let sumar = function (a, b) {
  return a + b;
};
console.log(sumar(5, 5)); //10

console.log("--------------");
let restar = (a, b) => {
  return a - b;
};
console.log(restar(10, 5)); //5

console.log("--------------");
setTimeout(() => {
  console.log("El tiempo termino...");
}, 3000);

console.log("--------------");
let numeros = [1, 2, 3, 4, 5];
let resultado = numeros.reduce((valorAnterior, valorActual) => {
  return valorAnterior + valorActual;
});

console.log(resultado);
