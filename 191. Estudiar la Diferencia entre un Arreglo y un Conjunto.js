// Ejercicio 191: Estudiar la Diferencia entre un Arreglo y un Conjunto.

//Arreglo:
let arreglo = [1, 2, 2, 2, 3, 4, 5, 5, 6, 6, 7, 8, 9];
console.log(arreglo); //[1, 2, 2, 2, 3, 4, 5, 5, 6, 6, 7, 8, 9]
console.log(arreglo.length); //13
console.log("--------------------------------------");

//Conjunto:
let conjunto = new Set();
conjunto.add(1);
conjunto.add(2);
conjunto.add(2);
conjunto.add(2);
conjunto.add(3);
conjunto.add(4);
conjunto.add(5);
conjunto.add(5);
conjunto.add(6);
conjunto.add(6);
conjunto.add(7);
conjunto.add(8);
conjunto.add(9);

console.log(conjunto); //Set(9) { 1, 2, 3, 4, 5, 6, 7, 8, 9 }
console.log(conjunto.size); //9
