// Ejercicio 231: Crear una Literal de Objeto con una Función Generadora de Factorial.

let objetoFactorial = {
  factorial: 1,
  auxiliar: 1,
  [Symbol.iterator]() {
    return this;
  },
  next() {
    this.factorial *= this.auxiliar;
    this.auxiliar++;
    return {
      value: this.factorial,
    };
  },
};

for (let i = 1; i < 10; i++) {
  console.log(objetoFactorial.next().value);
}
