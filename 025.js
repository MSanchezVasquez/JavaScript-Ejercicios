// Ejercicio 25: Determinar si una variable es un objeto plano.

let objetoPlano1 = {}; //<= Objetos planos
let objetoPlano2 = new Object(); //<= Objetos planos

let fecha = new Date(); //<= No son objetos planos
let cadena = new String(); //<= No son objetos planos

console.log(objetoPlano1.constructor === Object);
console.log(objetoPlano2.constructor === Object);
console.log();
console.log(fecha.constructor === Object);
console.log(cadena.constructor === Object);
