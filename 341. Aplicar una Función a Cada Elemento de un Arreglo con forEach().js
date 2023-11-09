// Ejercicio 341: Aplicar una Función a Cada Elemento de un Arreglo con forEach().

let equipos = [
  "Barcelona",
  "Bayern Munich",
  "Real Madrid",
  "Manchester City",
  "Inter Miami",
  "Juventus",
];

equipos.forEach((equipo, indice, equipos) => {
  if (equipo == "Bayern Munich") {
    equipos[indice] = "##";
  }
});

console.log(equipos); /*[
  'Barcelona',
  '##',
  'Real Madrid',
  'Manchester City',
  'Inter Miami',
  'Juventus'
]*/
