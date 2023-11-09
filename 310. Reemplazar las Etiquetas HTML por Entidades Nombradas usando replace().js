// Ejercicio 310: Reemplazar las Etiquetas HTML por Entidades Nombradas usando replace().

let html = "<p>Esto es texto en un<span>párrafo</span></p>";
console.log(html);
html = html.replace(/</g, "&lt;");
html = html.replace(/>/g, "&gt;");
console.log(html);
