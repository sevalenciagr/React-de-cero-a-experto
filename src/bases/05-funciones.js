// FUnciones en JS

// const saludar = function ( nombre ) {
//     return `Hola, ${nombre}`;
// }

const saludar2 = ( nombre ) => {
    return `Hola, ${nombre}`;
}

const saludar3 = ( nombre ) =>  `Hola, ${nombre}`;
const saludar4 = () =>  `Hola Mundo`;


// console.log( saludar( 'Goku'));

console.log( saludar2('Vegeta') );
console.log( saludar3('Goku') );
console.log( saludar4() );



const getUser = () => 
    ({    
        uid: 'ABC123',
        username: 'sevalenciagr'
    });

const user = getUser();
console.log(user);

// Tarea
// 1. Transformar a funcion de flecha
// 2. Retornar un objeto implicito
// 3. Prueba 

const getUsuarioActivo = ( nombre ) =>  
    ({
        uid: 'ABC123',
        username: 'sevalenciagr'
    });

const usuarioActivo = getUsuarioActivo('Sebastian');
console.log(usuarioActivo);