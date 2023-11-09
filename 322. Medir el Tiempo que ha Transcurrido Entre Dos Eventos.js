// Ejercicio 322: Medir el Tiempo que ha Transcurrido Entre Dos Eventos.

let inicio = new Date();
setTimeout(function () {
  realizarTarea(inicio);
}, 25000);

function realizarTarea(fechaInicial) {
  let fin = new Date();
  let diferencia = fin - fechaInicial;
  console.log(diferencia);
}
