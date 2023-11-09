// Ejercicio 311: Convertir una Fecha en Formato ISO 8601 en un Objeto Tipo Fecha.

let fechaIso8601 = "2020-1-22T14:26:19Z";
fechaIso8601 = fechaIso8601.replace(/\D/g, " ");
console.log(fechaIso8601); //2020 1 22 14 26 19
let componentes = fechaIso8601.split(" ");
console.log(componentes);
--componentes[1];
let fecha = new Date(Date.UTC.apply(null, componentes));
console.log(fecha); //2020-01-22T14:26:19.000Z
console.log(typeof fecha); //object
console.log(fecha.toString()); //Wed Jan 22 2020 09:26:19 GMT-0500 (hora estándar de Perú)
