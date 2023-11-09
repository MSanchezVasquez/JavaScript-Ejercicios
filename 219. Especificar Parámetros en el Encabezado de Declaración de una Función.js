// Ejercicio 219: Especificar Parámetros en el Encabezado de Declaración de una Función.js

function sumar(a, b) {
  console.log(arguments);
  let suma = a + b;
  return suma;
}

console.log(sumar(2, 3)); //5

function sumarListaValores(valores) {
  console.log(arguments);
  return valores.reduce((valorActual, valorSiguiente) => {
    return valorActual + valorSiguiente;
  });
}

let numeros = [1, 2, 3, 4, 5];
console.log(sumarListaValores(numeros)); //15
