import { heroes } from '../data/heroes.js'

const getHeroeById = (id) => {
  return heroes.find( h => h.id === id );
}
// console.log( getHeroeById(2) );



const getHeroeByOwner = (owner) => {
  return heroes.filter( h => h.owner === owner );
}

console.log( getHeroeByOwner("DC") );