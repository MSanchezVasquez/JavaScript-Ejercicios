// Ejercicio 206: Agregar y Eliminar Elementos de un Mapa con add() y delete().

let produccion = new Map();
produccion.set("ENE", 100);
produccion.set("FEB", 120);
produccion.set("MAR", 140);
console.log(produccion); //Map(3) { 'ENE' => 100, 'FEB' => 120, 'MAR' => 140 }
console.log(produccion.size); //3

produccion.delete("ENE");
console.log(produccion); //Map(2) { 'FEB' => 120, 'MAR' => 140 }
console.log(produccion.size); //2

console.log(produccion.delete("NOV")); //false
