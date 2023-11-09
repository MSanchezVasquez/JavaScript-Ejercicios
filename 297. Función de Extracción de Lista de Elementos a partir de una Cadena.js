// Ejercicio 297: Función de Extracción de Lista de Elementos a partir de una Cadena

function extraerListaElementos(frase) {
  let inicio = frase.indexOf(":");
  let fin = frase.lastIndexOf(".");
  let listadoCadena = frase.substring(inicio + 1, fin);
  let lenguajes = listadoCadena.split(",");
  return lenguajes;
}

let frase =
  "Lenguajes de programación. Los mas populares son: JavaScript, Python, Java, C++.";
let resultado = extraerListaElementos(frase);
console.log(resultado.length); //4
console.log(resultado); //[ ' JavaScript', ' Python', ' Java', ' C++' ]
