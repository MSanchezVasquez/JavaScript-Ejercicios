// Ejercicio 145: Agregar o Remover Elementos de un Arreglo con splice.

let lenguajes = ["Java", "C++", "Python"];
console.log(lenguajes); //[ 'Java', 'C++', 'Python' ]
lenguajes.splice(2, 0, "JavaScript");
console.log(lenguajes); //[ 'Java', 'C++', 'JavaScript', 'Python' ]
lenguajes.splice(1, 0, "C#");
console.log(lenguajes); //[ 'Java', 'C#', 'C++', 'JavaScript', 'Python' ]
console.log("----------------------------------------");
lenguajes.splice(3, 2);
console.log(lenguajes); //[ 'Java', 'C#', 'C++' ]
