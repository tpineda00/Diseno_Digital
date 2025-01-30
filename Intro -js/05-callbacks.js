const lista = [ 1,2,3,4,5,6,7,8,9,10];

/* for (let i = 0; i < lista.length; i++) {
    console.log(lista[i]);
} */
/* lista.forEach(callback)

function callback(value,index,array){
    console.log(value,index,array);
} */ 

lista.forEach(function(value,index,array){
    console.log(value,index,array);
});

//clase 01/30/2025 jueves

for(const valor of lista){
    console.log(valor);
}

lista.map((valor) =>{
    return valor * 2;
}   );


const nuevalista = lista.map((valor) =>{
    if(valor % 2 === 0){
        return valor
    }
}   );


console.log(nuevalista);

const pares = lista.filter((valor) =>{  
    return valor % 2 === 0;
}   );  

console.log(pares);


const postres = [
    {nombre:'Tres leches',
    precio: 20},
    {nombre:'Pie de limon',
    precio: 25},
    {nombre:'Cheesecake',
    precio: 30},
    {nombre:'Tiramisu',
    precio: 35},
    {nombre:'Mousse de chocolate',
    precio: 40}];

const precios = postres.map((postre) => {
    return postre.precio <40;
});

console.log(evaluacion.length  > 0 ? 'Hay postres menores a 40' : 'No hay postres menores a 40');