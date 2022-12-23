function saludar( nombre ) {
    // console.log( arguments );
    // console.log('Hola ' + nombre);
    return [1, 2];

    //Esto nunca se va a ejecutar
    console.log('Soy un código que está después del return');
};

/* Esto se conoce como una función anónima */
const saludar2 = function( nombre ) {
    console.log('Hola ' + nombre);
}

/* FUNCIONES FLECHAS */
const saludarFlecha = () => {
    console.log('Hola Flecha');
};

const saludarFlecha2 = ( nombre ) => {
    console.log('Hola ' + nombre);
};

const retornoSaludar = saludar('Jorge', 40, true, 'Costa Rica');
// console.log( retornoSaludar[0] , retornoSaludar[1]);
//saludar2('Fernando');

// saludarFlecha();
// saludarFlecha2('Mateo');

function sumar ( a, b ) {
    return a + b;
};
console.log( sumar(1,2));

// const sumar2 = (a,b) => {
//     return a + b;
// };

const sumar2 = (a,b) => a + b;

console.log(sumar2(2, 3));

function getAleatorio() {
    return Math.random();
}

console.log( getAleatorio() );

//Transformar en una función de flecha que no tenga llaves
//getAleatorio2()

const getAleatorio2 = () => Math.random();

console.log( getAleatorio2() );


