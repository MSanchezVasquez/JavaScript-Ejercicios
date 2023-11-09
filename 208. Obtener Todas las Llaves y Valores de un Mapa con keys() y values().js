// Ejercicio 208: Obtener Todas las Llaves y Valores de un Mapa con keys() y values().

let produccion = new Map();
produccion.set("ENE", 100);
produccion.set("FEB", 120);
produccion.set("MAR", 110);
console.log(produccion); //Map(3) { 'ENE' => 100, 'FEB' => 120, 'MAR' => 110 }
console.log("--------------------------");
let llaves = produccion.keys();
console.log(llaves); //[Map Iterator] { 'ENE', 'FEB', 'MAR' }
console.log(llaves.next());
console.log(llaves.next());
console.log(llaves.next());
console.log(llaves.next());
console.log(llaves.next());
console.log("--------------------------");
let valores = produccion.values();
console.log(valores); //[Map Iterator] { 100, 120, 110 }
console.log(valores.next());
console.log(valores.next());
console.log(valores.next());
console.log(valores.next());
console.log(valores.next());
