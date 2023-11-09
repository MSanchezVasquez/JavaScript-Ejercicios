// Ejercicio 299: Simplificar Función Extración Lista de Elementos a partir de una Cadena.

function extraerListaElementos(frase) {
  let inicio = frase.indexOf(":");
  let fin = frase.lastIndexOf(".");
  let listado = frase.substring(inicio + 1, fin).split(";");
  listado.forEach((valor, indice, arreglo) => {
    arreglo[indice] = valor.trim();
  });
  return listado;
}

let frase =
  "Lenguajes de programación. Los mas populares son: JavaScript, Python, Java, C++.";
let resultado = extraerListaElementos(frase);
console.log(resultado.length); //4
//console.log(resultado); //[ ' JavaScript', ' Python', ' Java', ' C++' ]
console.log(resultado); //["JavaScript", "Python", "Java", "C++"];
