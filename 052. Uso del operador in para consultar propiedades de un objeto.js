// Ejercicio 52: Uso del operador in para consultar propiedades de un objeto.

let barcelona = { año: 1995, pais: "España", trofeos: 32 };

console.log("año" in barcelona); //true
console.log("trofeos" in barcelona); //true
console.log("board" in barcelona); //false
console.log();
let fecha = new Date();
console.log(fecha);
console.log("getTime" in fecha); //true
console.log("getLastMonth" in fecha); //false
