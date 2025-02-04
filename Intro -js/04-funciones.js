//orden de decalracion de funciones es de nivel supperior


function saludo () {
    this.nombre = 'Juan';
    console.log('Hola'+ this.nombre);
}   



function saludo2 (nombre) {
return 'Hola'+ nombre;}

consolw.log(saludo());
console.log(saludo2('Juan'));

function saludo3 ({nombre,apellido,edad}) {
  return 'Hola ${nombre} ${apellido} tienes ${edad} años';
}

const params = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 18
}

console.log(saludo3(params));

//funciones de flecha (funciones lambda)

const saludo4 =function () {
    return 'Hola mundo';
}


const saludo5 = () => {
    return 'Hola mundo';
}

console.log(saludo4());
console.log(saludo5()); 
