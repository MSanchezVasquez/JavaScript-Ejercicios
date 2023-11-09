// Ejercicio 296: Extraer una Lista de Elementos a partir de una Cadena de Caracteres.

let frase =
  "Lenguajes de programación. Los mas populares son: JavaScript, Python, Java, C++.";
let inicio = frase.indexOf(":");
let fin = frase.lastIndexOf(".");

let listadoCadena = frase.substring(inicio + 1, fin);
console.log(inicio); //48
console.log(fin); //79
console.log(listadoCadena); //JavaScript, Python, Java, C++

let lenguajes = listadoCadena.split(",");
console.log(lenguajes.length); //4
console.log(lenguajes); //[ ' JavaScript', ' Python', ' Java', ' C++' ]
