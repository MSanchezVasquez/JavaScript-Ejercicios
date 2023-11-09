// Ejercicio 204: Crear un Objeto Mapa usando la Clase Map.

let mapa = new Map();
mapa.set("ENE", 100);
mapa.set("FEB", 150);
mapa.set("MAR", 125);
mapa.set("ABR", 170);
mapa.set("MAY", 185);

console.log(mapa);

console.log(mapa.get("MAY")); //185
console.log(mapa.get("NOV")); //undefined
