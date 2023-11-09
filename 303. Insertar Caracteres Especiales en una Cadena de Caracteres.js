// Ejercicio 303: Insertar Caracteres Especiales en una Cadena de Caracteres.

let texto = "Caracter de derecho reservado \u00A9";
console.log(texto); //Caracter de derecho reservado ©

console.log("Caracter de párrafo: \u00B6"); //Caracter de párrafo: ¶

texto = "John's computer";
console.log(texto); //John's computer

texto = 'El lenguaje de programación "JavaScript" es tremendo';
console.log(texto); //El lenguaje de programación "JavaScript" es tremendo

texto = '\tEl lenguaje de programación \n"Python" es cool';
console.log(texto); /*	El lenguaje de programación 
                      "Python" es cool*/
