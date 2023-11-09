// Ejercicio 285: Uso de la Librería request de Node.js para Solicitudes Asincrónicas.

const request = require("request");
const url = "https://randomuser.me/api/?results=10";

request(url, (error, response, body) => {
  if (error) {
    throw error;
  }
  console.log(body);
});
