// Ejercicio 106: Convertir Colores de Hexadecimal a RGB (Red, Green, Blue)

function hexARgb(hex) {
  return {
    red: hex >> 16,
    green: (hex >> 8) & 255,
    blue: hex & 255,
  };
}

let colorHex = 0xffffff; //Color blanco en hexadecimal.
let mostrarRgb = hexARgb(colorHex);
console.log(mostrarRgb);
console.log("-----------------------------------");
let colorHex1 = 0x372554;
mostrarRgb = hexARgb(colorHex1);
console.log(mostrarRgb);
