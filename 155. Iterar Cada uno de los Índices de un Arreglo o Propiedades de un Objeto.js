// Ejercicio 155: Iterar Cada uno de los Índices de un Arreglo o Propiedades de un Objeto

//Arreglos
let hardwarePc = ["Monitor", "Mouse", "Teclado", "Antena Wifi", "Motherboard"];
for (i in hardwarePc) {
  console.log(`Indice ${i}, -Valor: ${hardwarePc[i]}`);
}
console.log("--------------------------------");

//Objetos
let moises = {
  nombre: "Moises",
  apellido: "Sanchez",
  email: "moises.com",
  edad: 22,
};
for (p in moises) {
  console.log(`Propiedad: ${p} - Valor: ${moises[p]}`);
}
