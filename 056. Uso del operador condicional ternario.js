// Ejercicio 56: Uso del operador condicional ternario.
// condicion ? expresion_1 : expresion_2

let edad = 17;
if (edad < 18) {
  resultado = "Menor";
} else {
  resultado = "Mayor";
}
console.log(resultado);

resultado = edad < 18 ? "Menor de edad" : "Mayor de edad";
console.log(resultado);
console.log();

edad = 11;
resultado = edad <= 12 ? "niño" : edad < 18 ? "adolescente" : "adulto";
console.log(resultado); //niño
