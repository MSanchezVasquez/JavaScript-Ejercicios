// Ejercicio 272: Usar una Expresión Regular para Reemplazar Texto.

let frase = "Python es un lenguaje de programación.";
console.log(frase); //Python es un lenguaje de programación.

let regular = /Python/i;
frase = frase.replace(regular, "Java");
console.log(frase); //Java es un lenguaje de programación.
