//var name="Juan";// no se deberia de definir una variable
var nombre ="Juan";
//console.log(nombre);

// su alcance es de bloque y no se puede redeclarar
// se puede sobre escribir
let apellido = "Perez";
//console.log(apellido);

//constante de bloque 
// no se puede reasignar
const host = "127.0.0.1";
//host="127.0.0.2";
//console.log(host);

// nuenvo scope
console.log("--------------------");
{
    console.log("Scope de bloque");
    console.log(nombre);
    console.log(apellido);
    console.log(host);


}

//const = dentro de un bloque
//let = dentro de un bloque
//var = global
