// Ejercicio 332: Buscar un Valor Específico en un Arreglo con indexOf() y lastIndexOf().

let array = ["JavaScript", "PHP", "Java", "PHP", "Python", "C++"];

let valor = array.indexOf("JavaScript");
console.log(valor); //0

valor = array.indexOf("C++");
console.log(valor); //4

valor = array.indexOf("c++");
console.log(valor); //-1

//lastIndexOf
console.log(array.lastIndexOf("PHP")); //3
