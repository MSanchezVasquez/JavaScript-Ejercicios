// Ejercicio 196: Comprobar si un Conjunto Contiene un Elemento Específico con has().

let numero = new Set();
numero.add(1).add(2).add(3).add(4).add(5);
console.log(numero); //Set(5) { 1, 2, 3, 4, 5 }
console.log(numero.has(1)); //true
console.log(numero.has(3)); //true
console.log(numero.has(6)); //false
