//Ejercicio 2: Determinar si una variable ha sido declarada con la funcion typeOf.

let a;
let b = 11;

console.log(typeof a);
console.log(typeof b);

if(typeof a === 'undefined'){
    console.log("La variable a no tiene asignado un valor")
}else{
    console.log("La variable a tiene un valor asignado")
}

console.log("----------------------------------------------")
if(typeof b === 'undefined'){
    console.log("La variable b no tiene asignado un valor")
}else{
    console.log("La variable b tiene un valor asignado")
}