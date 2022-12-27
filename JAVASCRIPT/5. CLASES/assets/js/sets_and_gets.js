class Persona {

    nombre = '';
    codigo = '';
    frase = '';
    comida = '';


    constructor( nombre = 'Sin nombre', codigo = 'Sin código', frase = 'Sin frase' ) {

        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
    }

    set setComidaFavorita( comida ) {
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita() {
        return `La comida favorita de ${ this.nombre } es ${ this.comida}`
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
console.log(iroman);

spiderman.miFrase();
// iroman.miFrase();

spiderman.setComidaFavorita = 'El pie de cereza de la tía May';
//spiderman.comida = 'Duende Verde';


console.log(spiderman.getComidaFavorita);

console.log(spiderman);