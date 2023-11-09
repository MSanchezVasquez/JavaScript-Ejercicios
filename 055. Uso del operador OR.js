// Ejercicio 55: Uso del operador de Disyunción lógica.
// || Or

let computador1 = { id: 1, procesador: "Intel", ram: 16 };
let computador2 = { id: 2, procesador: "AMD", ram: 32 };

if (computador1.id == 5 || computador2.id == 2) {
  console.log(true);
}

if (computador1.procesador == "Intel" || computador1.procesador == "AMD") {
  if (computador1.ram >= 8) {
    console.log("El computador n°1 puede ejecutar Age of Empires IV");
  } else {
    console.log("El computador n°1 no puede ejecutar Age of Empires IV");
  }
}
console.log();
computador2.procesador = "ARM"; // cambiamos el procesador a ARM
console.log(computador2);
if (
  (computador2.procesador == "Intel" || computador2.procesador == "AMD") &&
  computador2.ram >= 8
) {
  console.log("El computador n°2 puede ejecutar Age of Empires IV");
} else {
  console.log("El computador n°2 no puede ejecutar Age of Empires IV");
}
