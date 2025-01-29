//orden de decalracion de funciones es de nivel supperior


function saludo () {
    this.nombre = 'Juan';
    console.log('Hola'+ this.nombre);
}   



function saludo2 (nombre) {
 return 'Hola'+ nombre;}

consolw.log(saludo());
 console.log(saludo2('Juan'));

 