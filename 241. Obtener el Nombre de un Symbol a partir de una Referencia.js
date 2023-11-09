// Ejercicio 241: Obtener el Nombre de un Symbol a partir de una Referencia.

let symbol1 = Symbol.for("SymbolOne");

console.log(symbol1); //Symbol(SymbolOne)

console.log(Symbol.keyFor(symbol1)); //SymbolOne
