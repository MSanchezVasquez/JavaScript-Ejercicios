// Ejercicio 306: Encontrar y Resaltar Todas las Ocurrencias de un Patrón en una Cadena.

let frase = `Python es un lenguaje de programación interpretado cuya filosofía hace hincapié en la legibilidad de su código.

Se trata de un lenguaje de programación multiparadigma, ya que soporta orientación a objetos, programación imperativa y, en menor medida, programación funcional. Es un lenguaje interpretado, dinámico y multiplataforma.

Es administrado por la Python Software Foundation. Posee una licencia de código abierto, denominada Python Software Foundation License,2​ que es compatible con la Licencia pública general de GNU a partir de la versión 2.1.1, e incompatible en ciertas versiones anteriores.`;

let patron = /\bm\w*a\b/g;
let resultado = "";
let resultadoBusqueda;

while ((resultadoBusqueda = patron.exec(frase)) != null) {
  resultado += `En ${resultadoBusqueda.index} se encontró ${resultadoBusqueda[0]}\n`;
}

console.log(resultado); /*En 153 se encontró multiparadigma
                          En 243 se encontró medida
                          En 315 se encontró multiplataforma*/
