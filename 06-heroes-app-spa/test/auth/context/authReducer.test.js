import { authReducer, types } from "../../../src/auth";


describe('Pruebas en el authReducer', () => { 
  
  const initialState = { logged: false };

  test('Debe retornar el estado por defecto', () => { 
    
    const state = authReducer( initialState, {} );
    expect(state).toEqual(initialState);
  });

  test('Debe llamar el login autenticar y establecer el user', () => { 
    
    const action = { 
      type: types.login, 
      payload: { name: "Jesus", id: "ABC"}
    };

    const state = authReducer( initialState, action );
    expect(state).toEqual({
      logged: true,
      user: action.payload
    });
  });

  test('Debe llamar el login autenticar y establecer el user', () => { 

    const state = {
      logged: true,
      user: {}
    }
    
    const action = { type: types.logout };

    const newState = authReducer( state, action );
    expect(newState).toEqual( initialState );
  });
});