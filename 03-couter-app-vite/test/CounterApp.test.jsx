import { fireEvent, render, screen } from "@testing-library/react";
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

  test('debe de incrementar con el boton +1', () => { 
    
    render( <CounterApp value={ 100 } />);
    fireEvent.click( screen.getByText("+1"));
    expect( screen.getByText("101") ).toBeTruthy();

  })

  test('debe de decrementar con el boton -1', () => { 
    
    render( <CounterApp value={ 100 } />);
    fireEvent.click( screen.getByText("-1"));
    expect( screen.getByText("99") ).toBeTruthy();

  })
  
  test('debe de restaurar el value con el boton reset', () => { 
    
    render( <CounterApp value={ 100 } />);
    fireEvent.click( screen.getByText("-1"));
    fireEvent.click( screen.getByText("-1"));
    
    fireEvent.click( screen.getByRole("button", { name: "btn-reset" }) );
    expect( screen.getByText("100") ).toBeTruthy();

  })

})