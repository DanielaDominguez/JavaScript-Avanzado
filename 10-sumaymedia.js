/* Solcitar números al usuario, mostrar la suma y la media de los números introducidos
hasta introducir un número negativo y ahi mostrar el resultado
*/

let num1 = parseInt(prompt('ingresa un número'));
let suma = 0;
let contador = 0;
let media = 0;

while (num1 >= 0) {
    suma = suma + num1;
    contador ++;
    num1 = parseInt(prompt('ingresa un número'));
}
media = suma/contador;
document.write(`<p> Los números introducidos fueron: ${contador}`);
document.write(`<p> La suma es: ${suma}`);
document.write(`<p> La media es: ${media}`);


/*  otra solución
let suma-0, prom, cont-0, num;

num = parseInt(prompt('Ingresa un número'));

while (num >= 0) {
    cont ++;
    suma = suma + num;
    num = parseInt(prompt('ingresa un número'));
}
prom = suma/cont;
document.write('numeros validos introducidos: ' + cont);
document.write('<br> La suma es: ' + suma);
document.write('<br> El promedio es: ' + prom); */

/* otra solución */

/* let numeros = [];
let suma = 0, media = 0;
let num = parseInt(prompt('Ingrese un número'));

while (num >= 0) {
    suma = 0;
    media = 0;
    nums.push(num);
    for (let index = 0; index < nums.length; index++) {
        suma += nums[index];
    }
    media = suma / nums.length;
    document.write(`<p>La suma de los numeros es: ${suma}</p><p> La media de los numeros es: ${media}</p><br/>`);
    num = parseInt(prompt('Ingrese un número'));
}
 */

