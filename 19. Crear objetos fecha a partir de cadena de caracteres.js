// Ejercicio 19: Crear objetos fecha a partir de cadenas de caracteres.
let cadenaFecha = "May 13, 1913 13:15:19";
let fecha = new Date(cadenaFecha);
console.log(fecha);

//Le podemos cambiar mes, hora, minutos...
fecha.setMonth(0);
console.log(fecha);

// Crear fecha a partir del estandar RFC 3339
console.log("----------------------------");
cadenaFecha = "1913-05-13T13:17:19.23Z";
fecha = new Date(cadenaFecha);
console.log(fecha);
