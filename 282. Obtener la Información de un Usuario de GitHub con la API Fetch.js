// Ejercicio 282: Obtener la Información de un Usuario de GitHub con la API Fetch.

let url = "https://api.github.com/MSanchezVasquez";

fetch(url);
.then((respuesta) => respuesta.json());
.then((data) => {
  console.log(data);
}).catch((error) => {
  console.error(error);
})
