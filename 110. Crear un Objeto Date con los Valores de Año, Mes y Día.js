// Ejercicio 110: Crear un Objeto Date con los Valores de Año, Mes y Día.

let anio = 2010;
let mes = 5;
let dia = 21;

let fecha = new Date(anio, mes, dia);
console.log(fecha);
console.log(typeof fecha); //object
console.log(fecha instanceof Date); //true
