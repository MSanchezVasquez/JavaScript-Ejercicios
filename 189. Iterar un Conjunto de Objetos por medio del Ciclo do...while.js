// Ejercicio 189: Iterar un Conjunto de Objetos por medio del Ciclo do...while.

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

let punto1 = new Punto(1, 1);
let punto2 = new Punto(2, 1);
let punto3 = new Punto(0, 1);
let punto4 = new Punto(5, 7);
let punto5 = new Punto(1, 2);

let puntos = [punto1, punto2, punto3, punto4, punto5];
console.log(puntos.toString());

//Iteramos
let cont = 0;
do {
  console.log(puntos[cont].toString());
  cont++;
} while (cont < puntos.length);
