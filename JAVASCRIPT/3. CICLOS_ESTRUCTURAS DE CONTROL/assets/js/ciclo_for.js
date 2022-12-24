/* CICLO FOR */

const heroes = ['Batman', 'Superman', 'Mujer Maravilla', 'Acuaman'];

console.warn('Ciclo For Tradicional');


for ( let i = 0; i < heroes.length; i++){
    console.log(heroes[i]);
}

console.warn('Ciclo For in');

for ( let j in heroes ) {
    console.log( heroes[j] );
}

console.warn('Ciclo For of'); //Se suele nombrar a las variables en singular
for ( let hero of heroes ) {
    console.log( hero );
}

//