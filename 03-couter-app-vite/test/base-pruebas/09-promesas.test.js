import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas"

describe('Pruebas de 09-promesas', () => { 

  test('getHeroeByIdAsync deberia retornar un héroe', (done) => { 
    
    getHeroeByIdAsync(1)
      .then( hero => {

        expect(hero).toStrictEqual({
          id: 1,
          name: "Batman!!",
          owner: "DC"
        });

        done();
      })



   })
})