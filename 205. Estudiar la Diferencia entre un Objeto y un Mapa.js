// Ejercicio 205. Estudiar la Diferencia entre un Objeto y un Mapa.

let persona = {
  nombre: "Edward",
  edad: 33,
  email: "edward@gmail.com",
  101: "valor numerico",
};

for (const e in persona) {
  console.log(typeof e);
} /*string
    string
    string
    string*/
console.log("-----------");
let mapa = new Map();
mapa.set("ENE", 100);
mapa.set("FEB", 150);
mapa.set("MAR", 140);
mapa.set(101, 190);

console.log(mapa); //Map(4) { 'ENE' => 100, 'FEB' => 150, 'MAR' => 140, 101 => 190 }

mapa.forEach((valor, llave) => {
  console.log(typeof llave);
}); /*string
      string
      string
      number*/
