class Persona {

    nombre = '';
    codigo = '';
    frase = '';


    constructor( nombre = 'Sin nombre', codigo = 'Sin código', frase = 'Sin frase' ) {

        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
    }

    //Métodos
    quienSoy() {
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }

    miFrase() {
        this.quienSoy();
        console.log(`${this.codigo} dice: ${this.frase}`);
    }
}

const spiderman = new Persona('Peter Parker', 'Spiderman', 'Soy tu amigable vecino Spiderman');
const iroman = new Persona('Tony Stark', 'Iroman', 'Yo soy Iroman');
console.log(spiderman);
console.log(iroman);

spiderman.miFrase();
iroman.miFrase();