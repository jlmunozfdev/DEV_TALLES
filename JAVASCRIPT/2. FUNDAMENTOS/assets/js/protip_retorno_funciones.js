// function crearPersona(nombre, apellido) {
//     return { nombre, apellido}
// };

const crearPersona = (nombre, apellido) => ({ nombre, apellido });

const persona = crearPersona ( 'Jorge ', 'Muñoz' );
console.log(persona);

function imprimeArgumentos() {
    console.log( arguments );
};

imprimeArgumentos( 10, true, false, 'Mateo');

const imprimeArgumentos2 = ( edad, ...args ) => {
    // console.log({ edad, args });
    return args;
}



const [casado, vivo, nombre] = imprimeArgumentos2( 10, true, false, 'Mateo');
// console.log( argumentos[0], argumentos[1] );

console.log({ casado, vivo, nombre });


const {apellido: nuevoApellido} = crearPersona ( 'Jorge ', 'Muñoz' );
console.log({nuevoApellido});


/* DESTRUCTURACIÓN DE ARGUMENTOS */

const tony = {
    nombre: 'Tony Stark',
    codeName: 'Iroman',
    vivo: false,
    edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
};

// const imprimePropiedades = ( personaje ) => {

//     console.log(personaje.nombre);
//     console.log(personaje.codeName);
//     console.log(personaje.vivo);
//     console.log(personaje.edad);

// };

const imprimePropiedades = ( {nombre, codeName, vivo, edad = 15, trajes} ) => {

    

    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});

};

imprimePropiedades(tony);

