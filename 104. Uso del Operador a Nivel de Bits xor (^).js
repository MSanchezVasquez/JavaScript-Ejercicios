// Ejercicio 104: Uso del Operador a Nivel de Bits xor (^).

let numero1 = 7; // 111 [2]
let numero2 = 6; // 110 [2]
// 111
// 110 xor
// 001 [2] = 1
let resultado = numero1 ^ numero2;
console.log(numero1, numero2, resultado); // 7 6 1
console.log("-----");
console.log(0b111 ^ 0b110); // 1
