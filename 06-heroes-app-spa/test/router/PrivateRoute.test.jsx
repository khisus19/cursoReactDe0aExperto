import { render, screen } from "@testing-library/react";
import { PrivateRoute } from "../../src/router/PrivateRoute";
import { AuthContext } from "../../src/auth";
import { MemoryRouter, Route, Routes } from "react-router-dom";


describe('Pruebas en el <PublicRoute />', () => { 

  test('Debe ir a una ruta privada si esta autenticado', () => {

    Storage.prototype.setItem = jest.fn();

    const contextValue = {
      logged: true,
      user: {
        name: "Strider",
        id: "ABC123"
      }
    };

    render(
      <AuthContext.Provider value={ contextValue } >
        <MemoryRouter initialEntries={["/search?q=batman"]}>
          <PrivateRoute>
            <h1>Ruta Privada</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect( screen.getByText("Ruta Privada") ).toBeTruthy();
    expect( localStorage.setItem ).toHaveBeenCalledWith("lastPath", "/search?q=batman");
  });


});