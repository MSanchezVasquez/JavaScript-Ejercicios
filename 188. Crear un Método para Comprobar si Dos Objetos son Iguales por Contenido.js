// Ejercicio 188: Crear un Método para Comprobar si Dos Objetos son Iguales por Contenido.

function Punto(x, y) {
  this.x = x;
  this.y = y;
}

Punto.prototype.iguales = function (otroPunto) {
  return this.x == otroPunto.x && this.y == otroPunto.y;
};

let punto1 = new Punto(3, 7);
let punto2 = new Punto(1, 5);

console.log(punto1.iguales(punto2)); //false

let punto3 = new Punto(1, 5);
console.log(punto2.iguales(punto3)); //true
