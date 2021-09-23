/* Ciclo while
   Nos permite repetir de código mientras una condición
   se verdadera
*/

//NaN Not a number

/* let num1 = parseInt(prompt('Ingresa un número'));
const num_secreto = 23;
let intentos = 1; */

/* while(isNaN(num1)) {
    num1 = parseInt(prompt('Ingresa un número'));
} */
/* 
while (num1 !== num_secreto) {
    console.log('No adivinaste el número secreto, intenta de nuevo');
    console.log(`Intento: ${intentos}`);
    intentos++;
    num1 = parseInt(prompt('ingresa un número'));
}
console.log('Felicidades, encontraste el número secreto'); */

/* Ciclo while
   Nos permite repetir de código mientras una condición
   se verdadera
*/

let num1 = parseInt(prompt('ingresa un número'));

do {
    document.write(`<p>El número indroducido es: ${num1}</p>`);
    num1 = parseInt(prompt('ingresa un número'));
}
while(num1 > 5);
