// Ejercicio 345: Convertir un Grupo de Números Decimales a Hexadecimales con map().

let decimales = [29, 31, 255, 5, 17, 23, 101, 23537];
let hexadecimales = decimales.map((decimal) => {
  return decimal.toString(16);
});

console.log(decimales); //[29, 31, 255,5,17,23,101,23537]
console.log(hexadecimales); //['1d','1f','ff','5','11','17''65','5bf1']
