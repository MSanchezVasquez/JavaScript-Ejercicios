// Ejercicio 293: Ejecutar Múltiples Solicitudes GET como Objetos Promise usando all().

let url = [
  "https://randomuser.me/api/?results=3",
  "https://randomuser.me/api/?results=5",
  "https://randomuser.me/api/?results=10",
];

let solicitudes = url.map((url) => fetch(url));
Promise.all(solicitudes).then((respuestas) =>
  respuestas.forEach((r) => console.log(`${r.url}: ${r.status}`))
);
