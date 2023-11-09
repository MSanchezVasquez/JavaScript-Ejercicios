// Ejercicio 54: Uso del operador de conjunción lógica
// && And Y

let edad = 19;
let salario = 1000;

if (edad >= 18 && salario > 800) {
  console.log("Admitido para un sorteo");
}

edad = 23;
salario = 700;
if (edad >= 18 && salario > 800) {
  console.log("Admitido para el sorteo");
} else {
  console.log("No esta admitido para este sorteo");
}

console.log();
if (edad >= 18) {
  if (salario >= 800) {
    console.log("Se cumplen todas los requisitos.");
  } else {
    console.log("No se cumple el requisito del salario.");
  }
} else {
  console.log("no se cumple el requisito de la edad.");
}
