// Ejercicio 249: Crear un Objeto Proxy usando la Clase Proxy de ES6.

let handler = {
  get: function (target, name) {
    return name in target ? target[name] : "No existe la propiedad: " + name;
  },
};

let persona = { nombre: "Moises", edad: 22 };

let proxy = new Proxy(persona, handler);

console.log(proxy.nombre); //Moises
console.log(proxy.apellido); //No existe la propiedad: apellido
console.log(proxy.edad); //22
console.log(proxy.correo); //No existe la propiedad: correo
