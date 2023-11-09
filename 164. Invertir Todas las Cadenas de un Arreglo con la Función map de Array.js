// Ejercicio 164: Invertir Todas las Cadenas de un Arreglo con la Función map de Array.

let lenguajes = ["JavaScript", "C#", "PHP", "Java", "C++"];

let resultado = lenguajes.map((valor) => {
  return valor.split("").reverse().join("");
});
console.log(lenguajes); //[ 'JavaScript', 'C#', 'PHP', 'Java', 'C++' ]
console.log(resultado); //[ 'tpircSavaJ', '#C', 'PHP', 'avaJ', '++C' ]
