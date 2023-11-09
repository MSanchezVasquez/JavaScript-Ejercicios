// Ejercicio 244: Especificar una Propiedad de una Clase como Metadata usando Symbol.

let tamagnio = Symbol("Tamaño");

class Coleccion {
  constructor() {
    this[tamagnio] = 0;
  }
  agregar(elemento) {
    this[this[tamagnio]] = elemento;
    ++this[tamagnio];
  }

  static tamagnioActual(instancia) {
    return instancia[tamagnio];
  }
}

let numeros = new Coleccion();
console.log(Coleccion.tamagnioActual(numeros)); //0

numeros.agregar(2);
console.log(Coleccion.tamagnioActual(numeros)); //1

numeros.agregar(4);
console.log(Coleccion.tamagnioActual(numeros)); //2
