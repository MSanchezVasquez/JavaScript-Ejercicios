// Ejercicio 156: Iterar por Todos los Valores de un Arreglo o una Cadena con for...of.

//Arreglo
let hardwarePc = ["Monitor", "Mouse", "Teclado", "Antena Wifi", "Motherboard"];
for (i of hardwarePc) {
  console.log(i);
}
console.log("-----------------");
//Cadena
let texto = "JavaScript es tremendo";
for (let c of texto) {
  console.log(c);
}
