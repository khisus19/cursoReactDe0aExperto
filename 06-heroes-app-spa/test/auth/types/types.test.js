import { types } from "../../../src/auth";

describe('Prueba en types', () => { 
  
  test('Debe retornar los types', () => { 

    expect(types).toEqual({
      login: "[Auth] Login",
      logout: "[Auth] Logout",
    });

  });

});