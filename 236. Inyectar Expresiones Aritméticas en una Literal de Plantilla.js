// Ejercicio 236: Inyectar Expresiones Aritméticas en una Literal de Plantilla.

let nombre = "Mouse gamer";
let precio = 29;
let cantidadComprada = 3;

let salida = `El producto comprado es: ${nombre} y su precio es: ${precio}. \nLa cantidad comprada fue de ${cantidadComprada} unidades.\nPrecio total de la compra: ${
  precio * cantidadComprada
} `;

console.log(salida);
