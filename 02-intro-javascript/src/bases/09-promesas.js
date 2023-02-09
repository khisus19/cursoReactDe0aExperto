import { getHeroeById } from './bases/08-import-export.js'

// const promesa = new Promise( (resolve, reject) => {

//   setTimeout(() => {
    
//     //Tarea
//     // Importen el getHeroesById
//     const p1 = getHeroeById(1);

//     resolve( p1 );
//     // reject( "No se pudo encontrar el héroe" );
//     // console.log(p1);

//   }, 2000);
// })

const getHeroeByIdAsync = ( id ) => {

  return new Promise( (resolve, reject) => {

    setTimeout(() => {
      const p1 = getHeroeById( id );
      
      if( p1 ) {

        resolve( p1 );

      } else {
        reject( "No se pudo encontrar el héroe" );
      }
  
    }, 2000);
  })
}

getHeroeByIdAsync(14).then( (heroe) => console.log("heroe", heroe) )
  .catch( err => console.warn( err ) );
