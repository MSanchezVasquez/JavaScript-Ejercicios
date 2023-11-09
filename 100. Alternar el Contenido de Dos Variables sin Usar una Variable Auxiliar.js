// Ejercicio 100: Alternar el Contenido de Dos Variables sin Usar una Variable Auxiliar.

function intercambiarContenido(numero1, numero2) {
  numero2 = numero2 - numero1;
  numero1 = numero1 + numero2;
  numero2 = numero1 - numero2;

  return [numero1, numero2];
}

console.log(intercambiarContenido(10, 5)); //[5, 10]
console.log(intercambiarContenido(5, 10)); //[10, 5]
console.log(intercambiarContenido(87, 54)); //[54, 87]
