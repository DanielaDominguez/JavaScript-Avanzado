/* Realizar un programa que lea por teclado dos números, si el primero es mayor al segundo informar su suma y diferencia, en caso contrario informar el producto y la división del primero respecto al segundo.
*/

let num1, num2;
        num1 = parseInt(prompt('Ingrese el primer número:'));
        num2 = parseInt(prompt('Ingrese el segundo número:'));
        if (num1 > num2) {
            let suma, diferencia;
            suma = num1 + num2;
            diferencia = num1 - num2;
            document.write(`<p>La suma de ${num1} + ${num2} = ${suma}</p>`);
            document.write('<br>');
            document.write(`<p>La diferencia de ${num1} - ${num2} = ${diferencia}</p>`)
        } else {
            let producto, division;
            producto = num1 * num2;
            division = num1 / num2;
            document.write(`<p>El producto de ${num1} x ${num2} = ${producto}</p>`);
            document.write('<br>');
            document.write(`<p>La división de ${num1} / ${num2} = ${division}</p>`);
        }