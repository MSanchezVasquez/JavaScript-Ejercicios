// Ejercicio 186: Comprobar si Dos Objetos son Iguales con la Función Object.is().

function Punto(x, y) {
  this.x = x;
  this.y = y;
}

Punto.prototype.distancia = function (otroPunto) {
  let distancia = Math.sqrt(
    Math.pow(this.x - otroPunto.x, 2) + Math.pow(this.y - otroPunto.y, 2)
  );
  return distancia;
};

Punto.prototype.toString = function () {
  return `(${this.x}, ${this.y})`;
};

let punto1 = new Punto(3, 7);
let punto2 = new Punto(-2, -1);

console.log(punto1.toString()); //(3, 7)
console.log(punto2.toString()); //(-2, -1)
console.log("-----------");
console.log(Object.is(punto1, punto2)); //false
console.log("-----------");
let punto3 = punto1;
console.log(Object.is(punto1, punto3)); //true
