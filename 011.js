// Ejercicio 11: Promocionar valores a tipo cadena de caracteres (String).

console.log(String("JavaScript"))
console.log("-----------")
console.log(String(5))
console.log("-----------")
console.log(typeof String(5))
console.log("-----------")
console.log(String(false));
console.log(String(true));
console.log("-----------")

let objeto = {nombre: "German", id: 1233456}
console.log(String(objeto))

console.log("-----------")
let numeros = [2, 5, 7, 9]
console.log(String(numeros))
console.log(numeros.join(','))

console.log("-----------")
let sumar = (a, b) => {return a + b}
console.log(String(sumar))

console.log("-----------")
console.log(String(undefined));
console.log(String(null))
console.log("-----------")
console.log(String(/abc/));
console.log("-----------")
objeto = {toString: function() {return '¡Hola!';}}
console.log(String(objeto))