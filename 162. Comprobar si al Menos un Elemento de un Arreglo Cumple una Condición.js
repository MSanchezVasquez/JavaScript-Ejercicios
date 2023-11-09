// Ejercicio 162: Comprobar si al Menos un Elemento de un Arreglo Cumple una Condición.
// some

let numeros = [3, 5, 7, 1, 0, 3, -1, 8];

let resultado = numeros.some((valor) => {
  return valor > 6;
});

console.log(resultado); //true

resultado = numeros.some((valor) => {
  return valor >= 0;
});
console.log(resultado); //true

resultado = numeros.some((valor) => {
  return valor > 10;
});
console.log(resultado); //false
