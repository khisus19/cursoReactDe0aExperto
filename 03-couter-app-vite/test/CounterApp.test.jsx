import { render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";


describe('Prueba de CounterApp', () => { 
  
  test('Debe hacer match con el snapshot', () => { 
   
    const { container } = render( <CounterApp value={ 100 } /> );
    expect( container ).toMatchSnapshot();

  })
  
  test('Debe tener el valor de 100', () => { 
   
    render( <CounterApp value={ 100 } /> );
    expect( screen.getByText(100) ).toBeTruthy();

  })

  test('Debe tener el valor de 100 dentro de una etiqueta <p>', () => { 
   
    render( <CounterApp value={ 100 } /> );
    // console.log(screen);
    expect( screen.getByRole("heading", {level: 3}).innerHTML ).toContain("100");

  })

})