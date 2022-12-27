class Persona {

    nombre = '';
    codigo = '';
    frase = '';


    constructor( nombre = 'Sin nombre', codigo = 'Sin código', frase = 'Sin frase' ) {

        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
    }
}

const spiderman = new Persona('Peter Parker', 'Spider', 'Soy tu amigable vecino Spiderman');
const iroman = new Persona('Tony Stark', 'Iroman', 'Yo soy Iroman');
console.log(spiderman);
console.log(iroman);