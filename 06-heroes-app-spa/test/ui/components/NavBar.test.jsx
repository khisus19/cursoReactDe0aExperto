import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../../src/auth";
import { Navbar } from "../../../src/ui/components/NavBar";


describe('Pruebas en el Navbar', () => { 

  test('Debe mostrar el user en la barra', () => { 

    const contextValue = {
      logged: true,
      user: {
        name: "Jesus",
        id: "ABC"
      }
    };

    render(
      <AuthContext.Provider value={ contextValue }>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect( screen.getByText("Jesus") ).toBeTruthy();

  });

  test('Debe llamar logout y navigate cuando se hace click en el boton', () => { 
    
    const contextValue = {
      logged: true,
      user: {
        name: "Jesus",
        id: "ABC"
      },
      logout: jest.fn()
    };

    render(
      <AuthContext.Provider value={ contextValue }>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect( contextValue.logout ).toHaveBeenCalled();
    
    
    // screen.debug();

  });
  
});