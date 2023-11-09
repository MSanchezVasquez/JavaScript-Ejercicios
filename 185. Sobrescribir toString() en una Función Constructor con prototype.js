// Ejercicio 185: Sobrescribir toString() en una Función Constructor con prototype.

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

console.log(punto1); //Punto { x: 3, y: 7 }
console.log(punto2); //Punto { x: -2, y: -1 }

console.log(punto1.distancia(punto2)); //9.433981132056603

console.log(punto1.toString()); //(3, 7)
