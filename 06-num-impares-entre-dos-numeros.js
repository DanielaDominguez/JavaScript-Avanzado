
/* Mostrar todos los numeros impares que hay entre dos números introducidos por el usuario */

let num1 = parseInt(prompt("Introduzca el primer número"));
let num2 = parseInt(prompt("Introduzca el segundo número"));
 
document.write("Los números impares que existen entre " + num1 + " y " + num2 + " son: ");
 
 
for (let i = num1 + 1; i <= num2; i++)
{ 
    document.write("<br>" + i +"<br>");
    if (i % 2 != 0) 
    {
        i++;    
    }
}


/* otra solución  

const num1 = parseInt(prompt("Introduzca el primer número"));
const num2 = parseInt(prompt("Introduzca el segundo número"));

if (num1 < num2) {
    for (let i =num1 +1; i < num2; i++){
        if (i % 2 !=0) {
            document.write(`<strong>${i},</strong>`);
        }
    }
}else {
    document.write(`<p>El segundo número debe ser mayor que el primero </p>`);
}
 */