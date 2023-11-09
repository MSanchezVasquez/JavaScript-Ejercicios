// Ejercicio 182:Crear una Clase para Representar un Punto Geométrico.

class Punto {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  toString() {
    return `(${this.x}, ${this.y})`;
  }

  distancia(otroPunto) {
    return Math.sqrt(
      Math.pow(this.x - otroPunto.x, 2) + Math.pow(this.y - otroPunto.y, 2)
    );
  }
}

let punto1 = new Punto(1, 3);
let punto2 = new Punto(5, 7);

console.log(punto1); //Punto { x: 1, y: 3 }
console.log(punto2); //Punto { x: 5, y: 7 }

console.log(punto1.toString()); //(1, 3)
console.log(punto2.toString()); //(5, 7)

console.log(punto1.distancia(punto2)); //5.656854249492381
console.log(punto2.distancia(punto1)); //5.656854249492381
