const nombre = prompt('¿Cual es tu nombre?');
const year = parseInt (prompt ('¿Cual es el año en que naciste?'));
const actualyear = 2021;
const edad = actualyear - year  ;

/* es equivalente a lo siguiente */
const saludo = `<p> Hola ${nombre} saludos. Tu edad es ${edad} años</p>`;

document.write(saludo);