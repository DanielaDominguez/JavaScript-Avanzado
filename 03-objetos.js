/* Una forma de estructurar información en pares clave-valor */

const persona = {
    nombre: `Julian`,  /* clave: `valor` */
    apellidos: `Sanchez Perez`,
    correo: `julian@sanchez`
}

const persona2 = [ `Julian`, `Sanchez Perez`, `julian@sanchez`]
console.log(persona2[0]);

const articulos = [
    {
        id: 1,
        nombre: `Alimento para perros`,
        precio: 30.50
    },
    {
        id:2,
        nombre: `Alimento para gatos`,
        precio: 60.35
    },
    {
        id:3,
        nombre: `Alimento para aves`,
        precio: 20.50
    
    },
]

document.write(persona.nombre);