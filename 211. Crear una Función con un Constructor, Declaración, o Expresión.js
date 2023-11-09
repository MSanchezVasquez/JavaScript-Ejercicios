// Ejercicio 211: Crear una Función con un Constructor, Declaración, o Expresión.

// Constructor:
let funcionConstructor = new Function("a", "b", "return a+b");
console.log(funcionConstructor(5, 8)); //13
console.log("---------");

//Declaracion:
function restar(a, b) {
  return a - b;
}
console.log(restar(5, 2)); //3
console.log("---------");

//Expresión:
let sumar = (a, b) => {
  return a + b;
};
console.log(sumar(5, 6)); //11
