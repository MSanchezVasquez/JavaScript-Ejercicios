// Ejercicio 245: Obtener las Propiedades Tipo Symbol de una Instancia

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

console.log(Object.getOwnPropertySymbols(numeros)); //[ Symbol(Tamaño) ]
console.log(Object.getOwnPropertyNames(numeros)); //[]
