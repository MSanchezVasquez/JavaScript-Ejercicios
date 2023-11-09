//Ejercicio 3: Comprobar si una funcion retorna un valor

function funcion1(){
    return;
}

function funcion2(){
    const A = 3;
}

function funcion3(){
    return 2+2;
}

function funcion4(){
    return true;
}

function funcion5(){
    return {};
}

let fn1 = funcion1();
console.log("Funcion 1 retorna: " + fn1);

let fn2 = funcion2();
console.log("Funcion 2 retorna: " + fn2);

let fn3 = funcion3();
console.log("Funcion 3 retorna: " + fn3);

let fn4 = funcion4();
console.log("Funcion 4 retorna: " + fn4);

let fn5 = funcion5();
console.log("Funcion 5 retorna: " + fn5);

console.log("-----------------------------------")
if(fn1 === undefined){
    console.log("La funcion no retorna ni un")
}


if(fn3 === undefined){
    console.log("La funcion no retorna ni un")
}else{
    console.log("La funcion 3 retorna un valor")
}