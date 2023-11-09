// Ejercicio 98: Representar un Número al Revés (Invertido)

function invertirNumero(numero) {
  return Number(numero.toString().split("").reverse().join(""));
}

console.log(invertirNumero(12345)); //54321
