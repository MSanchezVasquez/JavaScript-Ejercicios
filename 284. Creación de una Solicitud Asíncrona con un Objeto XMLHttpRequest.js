// Ejercicio 284: Creación de una Solicitud Asíncrona con un Objeto XMLHttpRequest.

const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    console.log(xhttp.responseText);
  }
};

xhttp.open("GET", "https://randomuser.me/api/?results=10", true);
xhttp.send();
