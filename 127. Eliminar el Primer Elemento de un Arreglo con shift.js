// Ejercicio 127: Eliminar el Primer Elemento de un Arreglo con shift.

let equiposDeFutbol = [
  "Barcelona",
  "Real Madrid",
  "Bayern Munich",
  "Manchester City",
  "Inter Miami",
];

console.log(equiposDeFutbol.length); //5
console.log(equiposDeFutbol);
let equipoEliminado = equiposDeFutbol.shift();
console.log("----------------");
console.log("Equipo Eliminado: ", equipoEliminado);
console.log(equiposDeFutbol); //[ 'Real Madrid', 'Bayern Munich', 'Manchester City', 'Inter Miami' ]
