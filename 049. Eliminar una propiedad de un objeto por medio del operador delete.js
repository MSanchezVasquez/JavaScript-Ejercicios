// Ejercicio 49: Eliminar una propiedad de un objeto por medio del operador delete.

let laptop = { id: 1001, procesador: "AMD Ryzen", ram: 32 };

console.log("El computador tiene " + laptop.ram + "GB de ram.");

delete laptop.ram;

console.log(laptop);
