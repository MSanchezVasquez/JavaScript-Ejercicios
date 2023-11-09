// Ejercicio 21: Crear y asignar propiedades a un objeto.

let computador = {}; //Se crea el objeto.

// Asi se asigna propiedades a un objeto.
computador.procesador = "AMD Ryzen 75700g";
computador.ram = 32;
computador.marca = "ASUS";
computador.board = "ROG STRIX";

console.log(computador); //Mostramos el objeto completo.
console.log(computador.procesador); //Mostramos el valor de la propiedad del objeto.

computador.procesador = "Intel core i9"; //Se le puede cambiar el valor de la propiedad de un objeto.
console.log(computador.procesador);
console.log("------------------------------");
//Segunda forma de crear un objeto.

computador = {
  procesador: "Intel i7",
  ram: 16,
  marca: "MSI",
  board: "Gygabite",
};
console.log(computador);
console.log(computador.board);

computador["Tarjeta-Gráfica"] = "RTX 4090";
console.log(computador["Tarjeta-Gráfica"]);
