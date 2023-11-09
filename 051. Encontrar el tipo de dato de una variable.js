// Ejercicio 51: Encontrar el tipo de dato de una variable.

console.log(typeof 2); //number
console.log(typeof NaN); //number
console.log(typeof Infinity); //number
console.log(typeof +"3.14"); //number
console.log(typeof "Hola"); //String
console.log(typeof 1 + " es un número"); //number
console.log(typeof (1 + " es un número")); //string
console.log(typeof true); //boolean
console.log(typeof false); //boolean
console.log(typeof undefined); //undefined
console.log(typeof {}); //object
console.log(typeof []); //object
console.log(typeof new Date()); //object
console.log();
let patron = /$/;
console.log(typeof patron); //object
console.log();
console.log(typeof null); //object
console.log(typeof new String()); //object
console.log(typeof new Number()); //object
console.log(typeof typeof {}); //string
