// Ejercicio 210: Iterar Todos los Elementos de un Mapa con la Función forEach().

let mapa = new Map();
mapa.set("ENE", 100);
mapa.set("FEB", 120);
mapa.set("MAR", 110);

mapa.forEach((valor, key) => {
  console.log(key, valor);
}); /*ENE 100
      FEB 120
      MAR 110*/
