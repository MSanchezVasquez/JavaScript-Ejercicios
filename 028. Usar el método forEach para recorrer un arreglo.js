// Ejercicio 28: Usar el método forEach para recorrer un arreglo.

//1era forma
let equipos = [
  "Barcelona",
  "Real Madrid",
  "Bayern Munich",
  "AC Milan",
  "Juventus",
];

equipos.forEach(function (valor, indice, equipos) {
  console.log(valor, indice);
});
console.log();

//2da forma
function recorrerArreglo(valor, indice, equipos) {
  console.log(valor, indice);
}

equipos.forEach(recorrerArreglo);
