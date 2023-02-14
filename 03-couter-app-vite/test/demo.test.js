
describe('Pruebas en <DemoComponet />', () => { 
  
  test('Esta prueba no falla', () => { 
    
    // 1. Inicializacion
    const messsage1 = 'Hola amigos';
  
    // 2. Estimulo
    const messsage2 = messsage1.trim();
  
    // 3. Observar el 
    expect( messsage1 ).toBe( messsage2);
  
  
  });

})
