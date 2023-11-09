// Ejercicio 242: Obtener el Tipo de Dato de un Elemento Symbol con typeof

let symbol1 = Symbol("Este es el Symbol n°01");
console.log(typeof symbol1); //symbol

let symbol2 = Symbol.for("SymbolTwo");
console.log(typeof symbol2); //symbol
