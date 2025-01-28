console.log("Estructuras de control");
//Lista siempre deberia de ser constante 
const postres = ["Tres leches", "Pie de limon", "Cheesecake", "Tiramisu", "Mousse de chocolate"];

postres.push("Pastel de zanahoria");// ingresa una dato al final 
postres.unshift("Flan");// ingresa un dato al inicio
postres.pop();// elimina el ultimo dato 
postres.shift();// elimina el primer dato
postres.length;// longitud del arreglo
postres[0];// acceder a un elemento del arreglo
postres.splice(1, 2);// elimina elementos del arreglo
postres.slice(1, 2);// obtiene elementos del arreglo


console.log(postres);

const mascotas = {
    nombre: "Firulais",
    raza: "Bulldog",
    edad: 5,
    color: "Cafe",
    vacunas: true,
}

console.log(mascotas);


const superheroes = [
    'superman',
    'batman',
    'mujer maravilla',
    'flash',
    'linterna verde',
    'spiderman',
]

const [primerValor,segundoValor,...restantes] = "superheroes";
console.log(primerValor);
console.log(segundoValor);
console.log(restantes); 
fnm --version