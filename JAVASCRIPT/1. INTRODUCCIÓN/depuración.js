/* DEPURACIÓN Y BREAKPOINTS */

let a = 10;
    b = 20,
    c = 'Hola ',
    d = 'Spiderman',
    x = a + b;
    
const saludo = c + d; 

console.log('%c Mis Variables', 'color:red; font-weight: bold');
console.log( {a} );
console.log( {b} );
console.log( {c} );

c = 'Hola de nuevo';

console.table({ a, b, c, d, x });
console.log(saludo);