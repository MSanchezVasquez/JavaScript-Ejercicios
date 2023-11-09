// Ejercicio 133: Eliminar Todo el Contenido de un Arreglo.

let lenguajes = ["JavaScript", "Python", "Java", "C++"];
console.log(lenguajes.length); //4
console.log(lenguajes); //["JavaScript", "Python", "Java", "C++"]
console.log("--------------");
//Metodo 1:
lenguajes.length = 0;
console.log(lenguajes.length); // 0
console.log(lenguajes); // []
console.log("--------------");
// Metodo 2:
lenguajes = ["JavaScript", "Python", "Java", "C++"];
lenguajes = [];
console.log(lenguajes.length); // 0
console.log(lenguajes); // []
