const nombre = prompt('¿Cual es tu nombre?');
const edad = prompt('¿Cual es tu edad?');

/* Convertir string a number */
/* el paseInt convierte string a number */
const edad = parseInt (prompt('¿Cual es tu edad?'));

console.log(typeof(nombre));
console.log(typeof(edad));

/* toString convierte un number a string */
console.log(typeof(edad.toString()))