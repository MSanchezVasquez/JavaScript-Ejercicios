// Ejercicio 217: Crear una Función Anónima como Propiedad de un Objeto Literal.

let radio = {
  marca: "Sony",
  modo: "FM",
  digital: true,
  encendido: false,
  encender: function () {
    this.encendido = true;
  },
  apagar: function () {
    this.encendido = false;
  },
};

console.log(radio);

radio.encender();
console.log(radio.encendido); //true

radio.apagar();
console.log(radio.encendido); //false
