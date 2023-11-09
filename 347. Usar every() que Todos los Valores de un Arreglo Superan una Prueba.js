// Ejercicio 347: Usar every() que Todos los Valores de un Arreglo Superan una Prueba.

let colores = ["Blanco", "Negro", "Rojo", "Verde", "@zul", "Gr1s"];

function validarNombresColores(color) {
  let re = /^[a-zA-Z]+$/;
  return re.test(color);
}

let resultado = colores.every(validarNombresColores);
console.log(resultado); //false

colores[4] = "Azul";
colores[5] = "Gris";

resultado = colores.every(validarNombresColores);
console.log(resultado); //true
