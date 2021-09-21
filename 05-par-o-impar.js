alert('Te diremos si el número que ingreses es par o impar');
const numero = parseInt (prompt ('ingresa un numero cualquiera'));

if(numero % 2 == 0){
    document.write ('El número ' + numero + ' es un número par.')
} else {
    document.write ('El número ' + numero + ' es un número impar.')
}
