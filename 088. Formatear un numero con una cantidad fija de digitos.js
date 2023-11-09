// Ejercicio 88: Formatear un numero con una cantidad fija de digitos.

var numero = 1.23456789;

console.log(numero.toPrecision()); //1.23456789
console.log(numero.toPrecision(2));
console.log(numero.toPrecision(5));

console.log(numero.toFixed()); //1
console.log(numero.toFixed(2));
console.log(numero.toFixed(5));
