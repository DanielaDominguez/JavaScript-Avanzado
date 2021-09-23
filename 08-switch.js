/* Switch
   Estructura de control de flujo, nos ayuda a tomar decisiones 
   mediante la evaluación de una condición.
   (Tipo if)
*/

/* const edad = parseInt(prompt('ingresa tu edad'));
let mensaje = ''; */

/* 

//ejemplo de similitud if con switch
if (edad === 18) {
    mensaje = 'Acaba de cumplir la mayoria de edad';
}

// es equivalente a 
switch (edad) {
    case 18:
        mensaje = 'acaba de cumplir la mayoria de edad';
        break;
}
*/

// ejemplo de switch
/* 
switch (edad) {
    case 18:
        mensaje = 'Acaba de cumplir la mayoria de edad';
        break;
    case 25:
        mensaje = 'Ya eres un adulto';
        break;
    case 70:
        mensaje = 'Ya eres de la tercera edad';
        break;
    default:
        mensaje = 'Fuera del rango de edad';
        break;
}
document.write(`<p>${mensaje}</p>`) */

const nombre = prompt("ingresa tu nombre");
let mensaje = '';

switch (nombre.toLowerCase()) {
    case 'daniela':
        mensaje = 'Eres administradora';
        break;
    case 'juan':
        mensaje = 'Eres usuario';
        break;
    default:
        mensaje = 'No tienes permiso para usar el sistema';
        break;
}
document.write(`<p>${mensaje}</p>`)