// Ejercicio 302: Estudiar la Diferencia Igualdad Abstracta versus Igualdad Estricta.

function comparar(variable) {
  return variable == 100;
}
let cadena1 = new String("JavaScript");
if (cadena1 == "JavaScript") {
  console.log("Son iguales.");
} else {
  console.log("No son iguales.");
}

if (cadena1 === "JavaScript") {
  console.log("Son iguales.");
} else {
  console.log("No son iguales.");
}
console.log();
let numero = 100;
console.log(comparar(numero)); //true
numero = "100";
console.log(comparar(numero)); //true
