// Ejercicio 250: Usar un Proxy para la Validación de Valores de Propiedades de un Objeto.

let validador = {
  set: function (objeto, propiedad, valor) {
    if (propiedad == "edad") {
      if (!Number.isInteger(valor)) {
        throw new TypeError("La edad no es un valor numerico.");
      }

      if (valor > 130) {
        throw new RangeError("La edad no debe superar los 130 años.");
      }
    }

    objeto[propiedad] = valor;
    return true;
  },
};

let persona = new Proxy({}, validador);
persona.nombre = "Moises";
persona.apellido = "Sanchez";
console.log(persona); //{ nombre: 'Moises', apellido: 'Sanchez' }

// Genera excepcion TypeError
// persona.edad = "abc";

// Genera excepcion RangeErro
// persona.edad: 150

persona.edad = 35;
console.log(persona); //{ nombre: 'Moises', apellido: 'Sanchez', edad: 35 }
