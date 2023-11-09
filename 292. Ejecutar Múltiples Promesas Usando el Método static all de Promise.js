// Ejercicio 292: Ejecutar Múltiples Promesas Usando el Método static all de Promise.
//Promise.all

Promise.all([
  new Promise((resolve) => setTimeout(() => resolve(1), 3000)),
  new Promise((resolve) => setTimeout(() => resolve(2), 2000)),
  new Promise((resolve) => setTimeout(() => resolve(3), 1000)),
]).then(console.log);
