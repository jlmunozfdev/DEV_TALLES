

// const arr = new Array(10);
// const arr = [];
// console.log(arr);

let videoJuegos = [ 'Mario 3', 'Megaman', 'Chrono Trigger' ];
console.log({ videoJuegos });

console.log(videoJuegos[0]);

let arregloCosas = [
    true,
    123,
    'Jorge',
    1 + 2,
    function() {},
    () => {},
    { a: 1 },
    ['X', 'Megaman', 'Zero', 'Dr.Light', [
        'Dr. Willy',
        'Woodman',
    ]]
];

// console.log({ arregloCosas });
console.log( arregloCosas[7][4][1]);

let obtenerDatos = arregloCosas[7][4];

console.log(obtenerDatos[1]);
