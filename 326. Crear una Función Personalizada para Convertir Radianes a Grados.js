// Ejercicio 326: Crear una Función Personalizada para Convertir Radianes a Grados.

function convertirRadianesGrados(radian) {
  let grados = radian * (180 / Math.PI);
  return grados;
}

console.log(convertirRadianesGrados(Math.PI / 2)); //90
console.log(convertirRadianesGrados(Math.PI)); //180
console.log(convertirRadianesGrados(Math.PI * 2)); //360
