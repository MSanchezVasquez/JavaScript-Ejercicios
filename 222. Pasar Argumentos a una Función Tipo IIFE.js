// Ejercicio 222: Pasar Argumentos a una Función Tipo IIFE.
// Inmediately Invoked Function Expression -> IIFE

let numeros = [1, 2, 3, 4, 5];
let resultado = (function (valores) {
  return valores.reduce((valorActual, valorSiguiente) => {
    return valorActual + valorSiguiente;
  });
})(numeros);

console.log(resultado);
