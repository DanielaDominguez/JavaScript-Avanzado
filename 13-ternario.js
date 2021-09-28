/* Operador ternario 
   Es una estructura de flujo (if abreviado)
*/

const edad = 10;
/*
if (edad >= 18) {
    console.log('Eres mayor de edad');
}else {
    console.log('Eres menor de edad');
} */

const mensaje = edad >= 18 ? 'Eres mayor de edad' : 'Eres menor de dad'; /* estructura del operador ternario */
document.write(`<p> ${mensaje} </p>`);