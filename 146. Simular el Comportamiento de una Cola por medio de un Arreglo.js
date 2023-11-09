// Ejercicio 146: Simular el Comportamiento de una Cola por medio de un Arreglo.

let lenguajes = [];
lenguajes.push("JavaScript");
console.log(lenguajes); //[ 'JavaScript' ]
lenguajes.push("Python");
console.log(lenguajes); //[ 'JavaScript', 'Python' ]

let primerLenguaje = lenguajes.shift();
console.log(primerLenguaje); //JavaScript
console.log(lenguajes); //[ 'Python' ]
