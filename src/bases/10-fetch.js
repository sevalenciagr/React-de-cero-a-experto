

const apiKey = 'Ri5SjxctyQRaEqIP3CFA1CR6s2pD7ifi';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)

peticion
    .then( resp => resp.json() )
    .then( ({ data }) => {
        const { url } = data.images.original.url;

        const img = document.createElement('img');
        img.src = url;

        document.body.append( img );
    })
    .catch( console.warn );