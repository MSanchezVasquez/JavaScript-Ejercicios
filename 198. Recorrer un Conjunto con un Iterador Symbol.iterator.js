// Ejercicio 198: Recorrer un Conjunto con un Iterador Symbol.iterator.

let lenguajes = new Set(["Java", "C++", "C++", "Python", "Ruby", "PHP"]);
console.log(lenguajes); //Set(5) { 'Java', 'C++', 'Python', 'Ruby', 'PHP' }

let iterador = lenguajes[Symbol.iterator]();
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
