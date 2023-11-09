(() => {
  let btnCambiarColorFondo = document.getElementById("btnCambiarColorFondo");

  btnCambiarColorFondo.addEventListener(
    "click",
    () => {
      document.body.style.backgroundColor = "gray";
    },
    false
  );
})();
