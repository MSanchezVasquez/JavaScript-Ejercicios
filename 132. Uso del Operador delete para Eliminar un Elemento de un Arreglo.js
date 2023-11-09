// Ejercicio 132: Uso del Operador delete para Eliminar un Elemento de un Arreglo.

let numeros = [1, 2, 3, 4, 5];
console.log(numeros.length);
console.log(numeros);
console.log("---------------");
delete numeros[3];
console.log(numeros.length); //5
console.log(numeros); //[ 1, 2, 3, <1 empty item>, 5 ]
console.log(numeros[3] == undefined); //true
console.log("---------------");
numeros = numeros.filter((element) => {
  return element != undefined;
});

console.log(numeros); //[ 1, 2, 3, 5 ]
