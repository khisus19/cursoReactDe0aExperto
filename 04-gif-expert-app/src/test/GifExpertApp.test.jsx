import { fireEvent, render, screen } from "@testing-library/react"
import { GifExpertApp } from "../GifExpertApp"


describe('Pruebas en GifExpertApp', () => {
  
  test('No debe cambiar el estado si se busca la misma categoria', () => {

    const inputValue = "Real Madrid";

    render( <GifExpertApp />)
    
    const input = screen.getByRole("textbox");
    fireEvent.input( input, { target: { value: inputValue } } );
    // screen.debug()

    
  })

})