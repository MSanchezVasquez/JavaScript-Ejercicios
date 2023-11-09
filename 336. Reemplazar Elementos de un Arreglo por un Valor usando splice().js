// Ejercicio 336: Reemplazar Elementos de un Arreglo por un Valor usando splice().

let colores = ["Blanco", "Negro", "Rojo", "Verde", "Azul", "Amarillo"];
console.log(colores); //[ 'Blanco', 'Negro', 'Rojo', 'Verde', 'Azul', 'Amarillo' ]

/* Mecanismo #1:
colores.splice(colores.indexOf("Amarillo"), 1, "Gris");
console.log(colores); //[ 'Blanco', 'Negro', 'Rojo', 'Verde', 'Azul', 'Gris' ] */

//Mecanismo #2:
colores.splice(-1, 1, "Gris");
console.log(colores); //[ 'Blanco', 'Negro', 'Rojo', 'Verde', 'Azul', 'Gris' ]

colores = ["Blanco", "Negro", "Rojo", "Verde", "Violeta"];
colores.splice(colores.indexOf("Violeta"), 2, "Fucsia", "Morado");
console.log(colores); //[ 'Blanco', 'Negro', 'Rojo', 'Verde', 'Fucsia', 'Morado' ]
