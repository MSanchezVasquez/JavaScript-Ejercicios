// Ejercicio 213: Crear y Ejecutar una Función Anónima.

let sumar = (a, b) => {
  return a + b;
};
console.log(sumar(2, 3)); //5

console.log(typeof sumar); //function

//IIFE => Inmediately Invoked Function Expression
console.log();
(function () {
  console.log("Inmediately Invoked Function Expression");
})();
