// Ejercicio 141:Agregar un Arreglo al Final de Otro Arreglo.

let numeros1 = [1, 2, 3, 4, 5];
let numeros2 = [6, 7, 8, 9, 0];
let resultado = numeros1.concat(numeros2);
console.log(resultado); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
console.log("-------------");
resultado = numeros2.concat(numeros1);
console.log(resultado); //[6, 7, 8, 9, 0, 1, 2, 3, 4, 5]
