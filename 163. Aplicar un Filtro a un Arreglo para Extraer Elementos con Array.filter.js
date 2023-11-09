// Ejercicio 163: Aplicar un Filtro a un Arreglo para Extraer Elementos con Array.filter.

let numeros = [7, 3, 2, 0, 5, 11, 13, -5];

let resultado = numeros.filter((valor) => {
  return valor >= 5;
});
console.log(resultado); //[ 7, 5, 11, 13 ]
