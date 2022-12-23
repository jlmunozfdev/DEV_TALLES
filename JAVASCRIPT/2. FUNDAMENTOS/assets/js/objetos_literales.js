const personaje = {
    nombre: 'Tony Stark',
    codeName: 'Iroman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.04,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '109099, 09088',
        ubicacion: 'Malibu, California', 
    },
    "ultima-pelicula": 'Infinity War',
};

console.log(personaje);
console.log('Nombre: ', personaje.nombre);
console.log('Nombre: ', personaje['nombre']);
console.log('Edad: ', personaje.edad);

console.log('Coors: ', personaje.coords);
console.log('Coors: ', personaje.coords.lat);

console.log('N°. Trajes: ', personaje.trajes.length);
console.log('Último Traje: ', personaje.trajes[ personaje.trajes.length - 1 ]);

const x = 'vivo';

console.log('Vivo: ', personaje[x]);

console.log('Última película: ', personaje['ultima-pelicula']);

/* MÁS DETALLES */

delete personaje.edad;
console.log(personaje);

personaje.casado = true;


const entriesPares = Object.entries( personaje );
console.log(entriesPares);

//personaje = true;

console.log( personaje );

/* Bloque de  las propiedades*/
Object.freeze( personaje );

personaje.dinero = 1000000;
personaje.casado = false;
personaje.direccion.ubicacion = 'Costa Rica';
console.log( personaje );

const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);
console.log({ propiedades, valores });


