// Desestructuración 
// Asignación Desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
};

// const { nombre, edad, clave } = persona;

// console.log( nombre );
// console.log( edad );
// console.log( clave );

const usoContexto = ( { nombre, edad, clave } ) => {
   
    // console.log( nombre, edad );
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
    }
}

// retornaPersona( persona );

const { nombreClave, anios, latlng:{ lat, lng} } = usoContexto( persona );

console.log(nombreClave, anios);
console.log( lat, lng );