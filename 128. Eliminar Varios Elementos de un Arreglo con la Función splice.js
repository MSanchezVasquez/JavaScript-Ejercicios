// Ejercicio 128: Eliminar varios elementos de un arreglo con la funcion splice.

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numeros.length);
console.log(numeros);
console.log("-------------------");
//Eliminemos los numeros 4 y 5
let numerosEliminados = numeros.splice(3, 2);
console.log(numeros.length);
console.log("Numeros eliminados: ", numerosEliminados);
console.log(numeros);
