// Ejercicio 220: Especificar una Cantidad Variable de Parámetros en una Función.

function diasSemanas(...dias) {
  console.log(dias);
  dias.forEach((valor) => {
    console.log(valor);
  });
  console.log("--------");
  console.log(dias[1]);
}

diasSemanas("Martes", "Jueves", "Sabado");
diasSemanas("Martes", "Miercoles", "Jueves", "Sabado");

console.log("-----------------------------");
function sumar(...valores) {
  return valores.reduce((valorActual, valorSiguiente) => {
    return valorActual + valorSiguiente;
  });
}
console.log(sumar(1, 2, 3, 4, 5)); //15
console.log(sumar(2, 3, 5)); //10

let numeros = [3, 5, 7, 9];
console.log(sumar(...numeros));
