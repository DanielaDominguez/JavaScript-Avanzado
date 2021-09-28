const $btnCat = document.querySelector('#btnCat');
const $divCats = document.querySelector('#cats');

$btnCat.addEventListener('click', () => {
    fetch('https://api.thecatapi.com/v1/images/search')
        .then(resp => resp.json()).then(data => {
            console.log(data);
            const imgCat = document.createElement('img');
            imgCat.src = gato.url;
            imgCat.width = '300';
            /* imgCat.src = data[0].url; */
            /* document.body.append(imgCat); */
            $divCats.appendChild(imgCat);
        });
}); 

/* Desestructuración
    Se usa para extraer elementos de un arreglo u objeto 
    const [cat] = data;
    const [cat] = data; == const cat = data [0]; 
    console.log(cat);
    const {url} = cat;*/