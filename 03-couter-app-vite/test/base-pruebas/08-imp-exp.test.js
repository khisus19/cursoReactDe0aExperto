import heroes from "../../src/data/heroes";

import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import { array } from "prop-types";

describe('Pruebas a 08-imp-exp', () => { 

  test('Debería retornar el nombre del héroe por su Id', () => { 
    
    const heroId = 1;
    const { name } = getHeroeById(heroId);

    expect( "Batman" ).toBe(name)
  });


  test('Deberia retornar un arreglo', () => { 
    
    const dcHeroesArr = getHeroesByOwner( "DC" );
    const marvelHeroesArr = getHeroesByOwner( "Marvel" );

    const dcs = [
      { id: 1, name: 'Batman', owner: 'DC' },
      { id: 3, name: 'Superman', owner: 'DC' },
      { id: 4, name: 'Flash', owner: 'DC' }
    ]

    const marvels = [
      {"id": 2, "name": "Spiderman", "owner": "Marvel"}, 
      {"id": 5, "name": "Wolverine", "owner": "Marvel"}
    ]


    expect( 3 ).toBe( dcHeroesArr.length );
    expect( dcs ).toStrictEqual( dcHeroesArr );
    expect( 2 ).toBe( marvelHeroesArr.length );
    expect( marvels ).toStrictEqual( marvelHeroesArr );
  })
})