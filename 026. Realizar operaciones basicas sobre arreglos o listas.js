// Ejercicio 26: Realizar operaciones basicas sobre arreglos o listas.

// Creacion de arreglos:
let lenguaje = ["JavaScript", "Python", "Java", "PHP"];
console.log(lenguaje.length); //Mostrar cantidad de elementos del arreglo lenguaje.

// Acceder a los elementos
console.log();
console.log(lenguaje[0]); //Posicion 1
console.log(lenguaje[1]); //Posicion 2
console.log(lenguaje[2]); //Posicion 3
console.log(lenguaje[3]); //Posicion 4

// Modificar:
console.log();
lenguaje[0] = "Go";
lenguaje[1] = "JavaScript ES6";
console.log(lenguaje);

//Eliminacion
console.log();
lenguaje.pop();
console.log(lenguaje.length);
console.log(lenguaje);

//Otra forma de crear un arreglo
console.log();
let numeros = new Array(5); //Especificamos la cantidad de elementos del arreglo en este caso es 5.
