

// const getImagenPromesa = () => new Promise( resolve => resolve('https://'))
// getImagenPromesa().then( console.log )

const getImage = async () => {
    const apiKey = 'Ri5SjxctyQRaEqIP3CFA1CR6s2pD7ifi';
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const data = await resp.json();

    console.log(data);
}



getImage();



// 

// 

// peticion
//     .then( resp => resp.json() )
//     .then( ({ data }) => {
//         const { url } = data.images.original.url;

//         const img = document.createElement('img');
//         img.src = url;

//         document.body.append( img );
//     })
//     .catch( console.warn );