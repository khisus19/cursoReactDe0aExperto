import { render, screen } from "@testing-library/react";
import { MainApp } from "../../src/09-useContext/MainApp";
import { MemoryRouter } from "react-router-dom";


describe('Pruebas en el MainApp', () => {

  test('Debe mostrar el HomePage', () => {

    render( 
      <MemoryRouter>
        <MainApp />
      </MemoryRouter>  
    );

    expect( screen.getAllByText("HomePage") ).toBeTruthy();
  });

  test('Debe mostrar el LoginPage', () => {

    render( 
      <MemoryRouter initialEntries={["/login"]}>
        <MainApp />
      </MemoryRouter>  
    );

    expect( screen.getAllByText("LoginPage") ).toBeTruthy();


  });


  test('Debe mostrar el About', () => {

    render( 
      <MemoryRouter initialEntries={["/about"]}>
        <MainApp />
      </MemoryRouter>  
    );

    expect( screen.getAllByText("AboutPage") ).toBeTruthy();


  });


});