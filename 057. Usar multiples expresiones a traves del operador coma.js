// Ejercicio 57: Usar multiples expresiones a traves del operador "," coma.
// ','

let lenguajes = ["JavaScript", "C#", "C++", "Python"],
  computador = { id: 1, ram: 32 },
  contador = lenguajes.length;

for (let i = 0, n = lenguajes.length; i < contador; ++i, --n) {
  console.log(
    "Lenguaje de programacion actual: " +
      lenguajes[i] +
      ". Quedan " +
      (n - 1) +
      " lenguajes de programacion por procesar."
  );
}
