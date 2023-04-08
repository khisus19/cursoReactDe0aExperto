import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones.js";

describe('Pruebas en 05-funciones', () => { 
  
  test('getUser debe retornar un objeto', () => { 
    
    const testUser = {
      uid: 'ABC123',
      username: 'El_Papi1502'
    };

    expect( testUser ).toStrictEqual( getUser() )
  });


  test('getUsuarioActivo debe retornar un nombre', () => { 
    const user = {
      username: "fernando",
      uid: 'ABC567' 
    }

    expect( user ).toStrictEqual( getUsuarioActivo( "fernando" ));
  })
});