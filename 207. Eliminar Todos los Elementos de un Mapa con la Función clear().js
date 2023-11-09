// Ejercicio 207: Eliminar Todos los Elementos de un Mapa con la Función clear().

let mapa = new Map();
mapa.set("ENE", 100);
mapa.set("FEB", 120);
mapa.set("MAR", 110);
console.log(mapa); //Map(3) { 'ENE' => 100, 'FEB' => 120, 'MAR' => 110 }
console.log(mapa.size); // 3
console.log("-------------------------------------");
mapa.clear();
console.log(mapa); //Map(0) {}
console.log(mapa.size); // 0
