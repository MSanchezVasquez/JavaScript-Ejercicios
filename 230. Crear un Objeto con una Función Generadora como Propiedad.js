// Ejercicio 230: Crear un Objeto con una Función Generadora como Propiedad.

let objetoFibonacci = {
  a: 0,
  b: 1,
  auxiliar: 0,
  [Symbol.iterator]() {
    return this;
  },
  next() {
    this.auxiliar = this.b;
    this.b = this.auxiliar + this.a;
    this.a = this.auxiliar;
    return { value: this.b };
  },
};

for (let i = 1; i <= 100; i++) {
  console.log(objetoFibonacci.next().value);
}
