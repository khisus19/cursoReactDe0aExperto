import { MemoryRouter } from "react-router-dom"
import { AuthContext } from "../../src/auth"
import { AppRouter } from "../../src/router/AppRouter"
import { render, screen } from "@testing-library/react"


describe('Pruebas en <AppRouter />', () => {

  test('Debe mostrar el login si no esta autenticado', () => {

    const contextValue = {
      logged: false,
    }

    render(
      <MemoryRouter initialEntries={["/marvel"]}>
        <AuthContext.Provider value={ contextValue }>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    );
    
    expect( screen.getAllByText("Login").length ).toBe(2);

  });

  test('Debe mostrar el componente Marvel si esta autenticado', () => {

    const contextValue = {
      logged: true,
      user: {
        id: "ABC",
        name: "Fulano de tal"
      }
    };

    render(
      <MemoryRouter initialEntries={["/login"]}>
        <AuthContext.Provider value={ contextValue }>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    expect( screen.getByText("Marvel") ).toBeGreaterThanOrEqual(1);

  });

});