import { render } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";


describe('Prueba de CounterApp', () => { 
  
  test('Debe hacer match con el snapshot', () => { 
   
    const { container } = render( <CounterApp value={ 100 } /> );
    expect( container ).toMatchSnapshot();

  })
  
  test('Debe tener el valor de 100', () => { 
   
    const { container } = render( <CounterApp value={ 100 } /> );
    console.log(container);
    // expect( container.contains(100) ).toBeTruthy();

  })

})