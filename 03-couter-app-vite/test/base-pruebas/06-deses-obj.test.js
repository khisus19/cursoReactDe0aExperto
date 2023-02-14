import { usContext } from "../../src/base-pruebas/06-deses-obj";


describe('Pruebas de 06-Desestructuración de objetos', () => { 
  
  test('usContext Debe devolver un objeto', () => { 
    const clave = 'Iron Man';
    const edad = 45; 

    expect( edad ).toBe( usContext(clave, edad).anios)
  })

})