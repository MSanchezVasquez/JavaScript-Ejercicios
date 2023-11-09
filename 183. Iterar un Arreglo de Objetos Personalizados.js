// Ejercicio 183: Iterar un Arreglo de Objetos Personalizados.

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

let punto1 = new Punto(1, 1);
let punto2 = new Punto(-7, 1);
let punto3 = new Punto(8, 0);
let punto4 = new Punto(0, 0);

let puntos = [punto1, punto2, punto3, punto4];
console.log(puntos); /*[
                        Punto { x: 1, y: 1 },
                        Punto { x: -7, y: 1 },
                        Punto { x: 8, y: 0 },
                        Punto { x: 0, y: 0 }
                      ]*/
console.log("------------------------");
puntos.forEach((punto) => {
  console.log(punto.toString());
});
