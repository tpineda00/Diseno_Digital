// ** Promesa : es una funcion que recibe un call back y me permite trabajr con tareas asincrona, se puede resolver de forma 
//** asincrona, que no bloquea  el hilo principal y de forma sincrona , que detiene el hilo principal  */


function suma(a, b) {
  return a + b;
}


//**Estados de las promesas
//**pending
//**resolve
//**reject
const miPromesa = (n1,n2) => {
    return new Promise((resolve,reject)=>{

     resolve(suma(n1,n2));
    }) //* la instacia de la promesa
    };

    mipromesa(2,3).then((resultado) => {

        console.log(resultado);
    }).cash((error)=>{

    })//*se ejecuta la promesa */



    const funcionAsincrona = async () => { 

        const resultado =miPromesa(2,3);
    }

    