/* ESTRUCTURA DE CONTROL IF_ELSE */

let a = 5;

if (a >= 10) {
    console.log('A es mayor o igual a 10');
} else {
    console.log('A es menor a 10');
}

//console.log('Fin del programa');

const hoy = new Date();
let dia = hoy.getDay(); //0: Domingo, 1:Lunes, 2: Martes....

console.log({dia});

if ( dia === 0) {
    console.log('Es Viernes');
} else if( dia === 1 ){
   console.log('Lunes');
    // if ( dia === 1 ){
    //     console.log('Lunes');
    // } else {
    //     console.log('No es Lunes ni Viernes');
    // }
} else if ( dia === 2) {
    console.log('Martes');
} else {
    console.log('No es Lunes, Martes o Viernes');
}

//Sin usar If Else, o Switch, pero únicamente objetos para imprimir en consola el día de la semana.
 dia = 2;

 const diaLetras = {
   
    0: 'domingo',
    1: 'lunes',
    2: 'martes',
    3: 'miercoles',
    4: 'jueves',
    5: 'viernes',
    6: 'sabado',
    
}
//Día de la semana
console.log( diaLetras [dia] || 'Día no definido');


 const diaLetras2 = ['domingo','lunes','martes','miercoles','jueves','viernes','sabado']

 
console.log( diaLetras [dia] );

