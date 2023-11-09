// Ejercicio 92: Crear una Función para la Generación de Números Aleatorios.

function generarAleatorio(minimo, maximo) {
  return Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
}

for (let i = 1; i < 10; i++) {
  console.log(generarAleatorio(1, 6));
}
console.log("----------");
for (let i = 1; i < 10; i++) {
  console.log(generarAleatorio(2, 4));
}
