import { render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks";
import { useFetch } from "../../src/hooks";

jest.mock("../../src/hooks/useFetch.js");

describe('Pruebas en MultipleCustomHooks', () => {

  test('Debe mostrar el componente por defecto', () => {

    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null
    });
    
    render( <MultipleCustomHooks /> );
    
    expect( screen.getByText("Loading...") );
    expect( screen.getByText("Rick and Morty characters") );
    
    const previousButton = screen.getByRole("button", { name: "Return to previous character" });
    expect( previousButton.disabled ).toBeTruthy();
    
    const nextButton = screen.getByRole("button", { name: "Change character" });
    expect( nextButton.disabled ).toBeFalsy();
    
    // screen.debug()
  });
  
  test('Debe mostrar un personaje', () => {
    
    useFetch.mockReturnValue({
      data: [{ name: "Fernando", species: "Hola Mundo"}],
      isLoading: false,
      hasError: null
    });

    render( <MultipleCustomHooks /> );
    // screen.debug();

  })
})