

const api_key = "9hNhYfR5jnRYPkOi33k6MxzUwtPNqJFt";

const peticion = fetch(`api.giphy.com/v1/gifs/random?api_key=${ api_key }`);

peticion.then( resp => resp.json() )
  .then( ({ data }) => {
    console.log(data.images.original.url);
  })
  .catch( console.warn );