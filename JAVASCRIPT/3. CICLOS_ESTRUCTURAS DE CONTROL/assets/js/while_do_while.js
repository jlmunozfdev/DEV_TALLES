

const carros = ['Ford', 'Mazda', 'Honda', 'Toyota'];

let i = 0;

// while ( i < carros.length ){
//     console.log(carros[i]);
//     i++;
// };

console.log('=======WHILE=========');

while ( carros[i] ){
    if (i === 1 ){
        // break;
        i++;
        continue;
    }
    console.log( carros[i] );
    i++;
};


console.log('=======DO WHILE=========');

let j = 0;

do {
    console.log(carros[j]);
    j++;
}while ( carros[j] );


