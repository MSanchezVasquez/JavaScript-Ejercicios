// Ejercicio 209: Comprobar si una Llave Existe en un Mapa usando la Función has().

let mapa = new Map();
mapa.set("ENE", 100);
mapa.set("FEB", 120);
mapa.set("MAR", 110);

console.log(mapa.has("ENE")); //true
console.log(mapa.has("JUL")); //false
