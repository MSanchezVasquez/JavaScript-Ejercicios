// Ejercicio 254: Definir Métodos Getters y Setters en un Clase.

class Messi {
  constructor(nombre, trofeos, esposa) {
    this._nombre = nombre;
    this._trofeos = trofeos;
    this._esposa = esposa;
  }
  get nombre() {
    return this._nombre;
  }
  set nombre(nombre) {
    this._nombre = nombre;
  }

  get trofeos() {
    return this._trofeos;
  }
  set trofeos(trofeos) {
    this._trofeos = trofeos;
  }

  get esposa() {
    return this._esposa;
  }
  set esposa(esposa) {
    this._esposa = esposa;
  }
}

let messi1 = new Messi("Lio", 24, "Anto");
console.log(messi1); //Messi { _nombre: 'Lio', _trofeos: 24, _esposa: 'Anto' }
console.log(messi1.esposa); //Anto
messi1.esposa = "Antonella";
console.log(messi1.esposa); //Antonella
