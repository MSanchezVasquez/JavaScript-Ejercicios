// Ejercicio 48: Uso del operador lógico de negación para alternar el valor de la verdad.
// !
// !true: false
console.log(!true); //false
console.log(!false); //true
console.log(!!true); //true

console.log(!1); //false
console.log(!0); //true

let a = true;
let b = false;
console.log(!(a && b)); //true
console.log(!(a || b)); //false
