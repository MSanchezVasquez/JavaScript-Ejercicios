// Ejercicio 248: Obtener el Tipo de una Clase Personalizada con Symbol.toStringTag.

let tamagnio = Symbol("Tamaño");

class Coleccion {
  constructor() {
    this[tamagnio] = 0;
  }
  agregar(elemento) {
    this[this[tamagnio]] = elemento;
    ++this[tamagnio];
  }

  get [Symbol.toStringTag]() {
    return "Coleccion";
  }

  static tamagnioActual(instancia) {
    return instancia[tamagnio];
  }
}

let numeros = new Coleccion();
console.log(typeof numeros); //object
console.log(Object.prototype.toString.call(numeros));
