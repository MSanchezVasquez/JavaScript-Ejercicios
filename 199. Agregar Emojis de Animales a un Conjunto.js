// Ejercicio 199: Agregar Emojis de Animales a un Conjunto.

let cerdo = "🐷";
let panda = "🐼";
let tortuga = "🐢";
let ardilla = "🐿️";
let gato = "🐈‍⬛";

let animales = new Set([cerdo, panda, tortuga, ardilla, gato]);
console.log(animales); //Set(5) { '🐷', '🐼', '🐢', '🐿️', '🐈‍⬛' }
console.log(animales.size); //5

console.log(animales.has(gato)); //true
