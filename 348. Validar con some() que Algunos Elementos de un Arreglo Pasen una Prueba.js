// Ejercicio 348: Validar con some() que Algunos Elementos de un Arreglo Pasen una Prueba.
function validarNombreColor(color) {
  let re = /^[a-zA-Z0]+$/;
  return re.test(color);
}
let colores = ["Blanco", "Negro", "Rojo", "Verde", "@zul", "gr1s"];

let resultado = colores.some(validarNombreColor);
console.log(resultado); //true
