// Ejercicio 118: Calcular la Cantidad de Días Transcurridos entre Dos Fechas

let fecha1 = new Date("11/13/2018");
let fecha2 = new Date("11/20/2019");

let mlsDia = 24 * 60 * 60 * 1000;

let mlsTranscurridos = Math.abs(fecha1.getTime() - fecha2.getTime());

let diasTranscurridos = Math.round(mlsTranscurridos / mlsDia);

console.log(diasTranscurridos);
