// Ejercicio 148: Obtener un Subconjunto de Elementos de un Arreglo.

let lenguajes = ["Python", "JavaScript", "C++", "PHP", "Java"];
console.log(lenguajes); //[ 'Python', 'JavaScript', 'C++', 'PHP', 'Java' ]

let resultado = lenguajes.slice(0, 2);
console.log(resultado); //["Python", "JavaScript"];
resultado = lenguajes.slice(2, lenguajes.length - 1);
console.log(resultado); //[ 'C++', 'PHP' ]
