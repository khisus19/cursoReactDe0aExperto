import { fireEvent, render, screen } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { LoginPage } from "../../src/09-useContext/LoginPage";


describe('Pruebas en el LoginPage', () => {

  test('Debe mostrar el componente sin el usuario', () => {

    render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText("pre"); // arial-label
    expect( preTag.innerHTML ).toBe( "null" );
    
  });
  
  test('Debe llamar el setUser cuando se hace click al boton', () => {
    
    const user = { id: 123, name: "Juan", email: "juan@google.com" };
    const setUserMock = jest.fn();

    render(
      <UserContext.Provider value={{ user, setUser: setUserMock }}>
        <LoginPage />
      </UserContext.Provider>
    );
    
    const addUserBtn = screen.getByRole("button");
    fireEvent.click( addUserBtn );
    expect( setUserMock ).toHaveBeenCalled();
    expect( setUserMock ).toHaveBeenCalledWith( user );

    // screen.debug();
  });

});