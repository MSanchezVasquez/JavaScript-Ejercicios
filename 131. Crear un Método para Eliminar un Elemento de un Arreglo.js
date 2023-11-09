// Ejercicio 131: Crear un Método para Eliminar un Elemento de un Arreglo.

function eliminarElemento(arreglo, valor) {
  return arreglo.filter((element) => {
    return element != valor;
  });
}

let nuevoarreglo = eliminarElemento([1, 2, 3, 4], 3);
console.log(nuevoarreglo); //[ 1, 2, 4 ]
