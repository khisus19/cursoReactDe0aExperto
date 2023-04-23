import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../components/AddCategory"

describe('Pruebas en AddCategory', () => { 
  
  test('Debe cambiar recibir el valor del input', () => { 

    render( <AddCategory onNewCategory={ () => {} } /> );
    const input = screen.getByRole('textbox');

    fireEvent.input( input, { target: { value: 'Saitama' } } );

    expect( input.value ).toBe('Saitama');

  });
});