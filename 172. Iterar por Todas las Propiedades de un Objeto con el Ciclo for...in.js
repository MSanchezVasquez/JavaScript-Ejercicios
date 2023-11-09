// Ejercicio 172: Iterar por Todas las Propiedades de un Objeto con el Ciclo for...in.

let persona = {
  nombre: "Moises",
  apellido: "Sanchez",
  email: "moises.com",
  edad: 22,
};

for (let p in persona) {
  console.log(`Propiedad: ${p}, -Valor: ${persona[p]}`);
}
