/**
 * Días de semana abrimos a las 11.
 * pero los fines de semanas abrimos a las 9
*/ 

//Entra a un sitio web, para consultar si está abierto hoy

const dia = 1; //0: domingo, 1: lunes...
const horaActual = 10;

let horaApertura;
let mensaje;


// if (dia === 0 || dia === 6)
// if( [0,6].includes( dia ) ){
//     console.log("Fin de semana");
//     horaApertura = 9;
// } else {
//     console.log('Día de semana');
//     horaApertura = 11;
// }

horaApertura = ([0,6].includes( dia )) ? 9 : 11;

mensaje = (horaActual >= horaApertura) ? 'Está abierto' : `Está cerrado, hoy abrimos a las ${ horaApertura }`;

// if (horaActual >= horaApertura) {
//     mensaje = 'Está abierto';
// } else {
//     mensaje = `Está cerrado, hoy abrimos a las ${ horaApertura }`
// }

console.log({ horaApertura, mensaje });





