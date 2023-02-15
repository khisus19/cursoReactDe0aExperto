import heroes from "../../src/data/heroes";

import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import { array } from "prop-types";

describe('Pruebas a 08-imp-exp', () => { 

  test('Debería retornar', () => { 
    
    const heroId = 1;
    const heroe = getHeroeById(heroId).name;

    expect( "Batman" ).toBe(heroe)
  });


  test('Deberia retornar un arreglo', () => { 
    
    const universo = "DC";
    const heroesArr = getHeroesByOwner( universo );
    const dcs = [
      { id: 1, name: 'Batman', owner: 'DC' },
      { id: 3, name: 'Superman', owner: 'DC' },
      { id: 4, name: 'Flash', owner: 'DC' }
    ]


    expect( 3 ).toBe( heroesArr.length );
    expect( dcs ).toStrictEqual( heroesArr );
  })
})