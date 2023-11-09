// Ejercicio 256: Crear una Clase con Métodos static para Simular la Clase Math.

console.log(Math.pow(2, 3)); //8
console.log(Math.sqrt(81)); //9
console.log(Math.cos(Math.PI)); //-1
console.log(Math.sin(Math.PI)); //1.2246467991473532e-16

class Calculadora {
  static potencia(base, potencia) {
    return Math.pow(base, potencia);
  }

  static seno(radianes) {
    return Math.sin(radianes);
  }

  static coseno(radianes) {
    return Math.cos(radianes);
  }
}
console.log("----------------------");
console.log(Calculadora.potencia(2, 3)); //8
console.log(Calculadora.seno(20)); //0.9129452507276277
console.log(Calculadora.coseno(180)); //-0.5984600690578581
