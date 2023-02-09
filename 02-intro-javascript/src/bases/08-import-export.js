import { heroes } from '../data/heroes.js'

export const getHeroeById = (id) => {
  return heroes.find( h => h.id === id );
}
// console.log( getHeroeById(2) );



export const getHeroeByOwner = (owner) => heroes.filter( h => h.owner === owner )

// console.log( getHeroeByOwner("DC") );