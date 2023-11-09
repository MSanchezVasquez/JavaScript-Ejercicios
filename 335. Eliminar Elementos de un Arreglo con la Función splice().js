// Ejercicio 335: Eliminar Elementos de un Arreglo con la Función splice().

let colores = ["Blanco", "Negro", "Rojo", "Verde", "Azul", "Gris"];

colores.splice(colores.indexOf("Negro"), 1);
console.log(colores); //[ 'Blanco', 'Rojo', 'Verde', 'Azul', 'Gris' ]

colores.splice(colores.indexOf("Azul"), 2);
console.log(colores); //[ 'Blanco', 'Rojo', 'Verde' ]
