// Ejercicio 340: Extraer los Elementos de un Arreglo por Referencia usando slice().

let productos = [];
productos[0] = { id: 1, nombre: "Mouse", precio: 29.9 };
productos[1] = { id: 2, nombre: "Teclado", precio: 69.9 };
productos[2] = { id: 3, nombre: "Audifonos", precio: 19.9 };
productos[3] = { id: 4, nombre: "Parlantes", precio: 39.9 };
productos[4] = { id: 5, nombre: "Monitor", precio: 299.9 };

console.log(productos); /*[
  { id: 1, nombre: 'Mouse', precio: 29.9 },
  { id: 2, nombre: 'Teclado', precio: 69.9 },
  { id: 3, nombre: 'Audifonos', precio: 19.9 },
  { id: 4, nombre: 'Parlantes', precio: 39.9 },
  { id: 5, nombre: 'Monitor', precio: 299.9 }
]*/
console.log();
let resultado = productos.slice(1, 4);
console.log(resultado.length); //3
console.log(resultado); /*[
  { id: 2, nombre: 'Teclado', precio: 69.9 },
  { id: 3, nombre: 'Audifonos', precio: 19.9 },
  { id: 4, nombre: 'Parlantes', precio: 39.9 }
]*/

console.log(resultado[0].nombre, resultado[0].precio); //Teclado 69.9
resultado[0].precio = 85.7;
console.log(resultado[0].nombre, resultado[0].precio); //Teclado 85.7

console.log();
console.log(productos[1].nombre, productos[1].precio); //Teclado 85.7
