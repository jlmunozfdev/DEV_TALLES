

const regresaTrue = () => {
    console.log('Regresa True');
    return true;
}

const regresaFalse = () => {
    console.log('Regresa False');
    return false;
}

console.warn('Not o la Negación');
console.log( true );
console.log( !true );
console.log( !false );

console.log( !regresaFalse() );

console.warn('And');
console.log( true && true );
console.log( true && false );

console.log('===================');
console.log( regresaFalse() && regresaTrue() );
console.log( regresaTrue() && regresaFalse() );

console.log('==== && ====');
regresaTrue() && regresaFalse();

console.log( 'Cuatro condiciones: ', true && true && true && false );

console.warn('OR'); //true
console.log( true || false );
console.log( false || false );

console.log( regresaTrue() || regresaFalse() );
console.log( 'Cuatro condiciones: ', true || true || true || false );


console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;


const a1 = false && 'Hola Mundo' && 150;
const a2 = 'Hola' && 'Mundo' && soyFalso && true;
const a3 = soyFalso || 'Ya no soy falso';
const a4 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso de nuevo' || true;
const a5 = soyFalso || soyUndefined || regresaTrue() || 'Ya no soy falso de nuevo' || true;

console.log({a1});

console.log({a2});

console.log({a3});

console.log({a4});

console.log({a5});

if ( true || true || true || false ) {
    console.log('Hacer algo');
} else {
    console.log('Hacer otra cosa');
}