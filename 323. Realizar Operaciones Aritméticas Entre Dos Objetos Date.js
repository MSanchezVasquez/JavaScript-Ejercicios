// Ejercicio 323: Realizar Operaciones Aritméticas Entre Dos Objetos Date.

let inicio = new Date();
setTimeout(() => {
  let fin = new Date();
  let suma = fin + " - " + inicio;
  let resta = fin - inicio;
  let producto = fin * inicio;
  let division = fin / inicio;
  console.log(suma);
  console.log(resta);
  console.log(producto);
  console.log(division);
}, 5000);
