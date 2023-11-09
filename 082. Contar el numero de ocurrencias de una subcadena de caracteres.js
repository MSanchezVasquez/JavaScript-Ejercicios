// Ejercicio 82: Contar el numero de ocurrencias de una subcadena de caracteres.

let cadena =
  "JavaScript es un lenguaje de programacion. La version mas reciente de JavaScript es ES6 (2015). JavaScript es un lenguaje interpretado que corre en un navegador web.";

function contarOcurrencias(cadena, subcadena) {
  let contadorOcurrencias = 0;
  let posicion = 0;

  while ((posicion = cadena.indexOf(subcadena, posicion)) !== -1) {
    ++contadorOcurrencias;
    posicion += subcadena.length;
  }

  return contadorOcurrencias;
}

console.log(contarOcurrencias(cadena, "JavaScript"));
