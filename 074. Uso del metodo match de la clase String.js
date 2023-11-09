// Ejercicio 74: Uso del metodo match de la clase String.

let texto = "El nuevo equipo de Messi es el Inter de Miami.";
let regex = /[A-Z]/g;
let found = texto.match(regex);
console.log(found); //[ 'E', 'M', 'I', 'M' ]

texto = "El nuevo equipo de Messi es el Inter de Miami. Usara la 10";
regex = /[0-9]/g;
found = texto.match(regex);
console.log(found); // ['1', '0']
