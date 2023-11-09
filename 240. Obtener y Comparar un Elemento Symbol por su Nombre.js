// Ejercicio 240: Obtener y Comparar un Elemento Symbol por su Nombre.

let symbol1 = Symbol.for("Symbol1");
let auxiliar = Symbol.for("Symbol1");

console.log(symbol1 == auxiliar); //true
console.log(symbol1 == Symbol.for("Symbol1")); //true
