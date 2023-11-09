// Ejercicio 215: Invocar una Función IIFE una vez se Cargue un Documento HTML.
// IIFE => Inmediately Invoked Function Expresion

(function () {
  alert("La pagina se ha cargado");
  document.body.style.backgroundColor = "gray";
})();
