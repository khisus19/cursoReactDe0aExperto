import { render, screen } from '@testing-library/react'; // Import de la función render
import { GifItem } from '../../components/GifItem'; // Import del componente


describe('Tests for GifItem Component', () => {
  
  const title = "Stranger things";
  const url   = 'https://one-punch.com/saitama.jpg';

  test('Should match the snapshot', () => { 
    
    const { container } = render( <GifItem title={ title } url={ url } /> );
    expect( container ).toMatchSnapshot();
  });

  test('Debe mostrar la imagen con el URL y el ALT indicado', () => { 
    
    render( <GifItem title={ title } url={ url } /> );
    // screen.debug();
    // expect( screen.getByRole('img').src ).toBe( url );
    const { src, alt } = screen.getByRole('img');
    expect( src ).toBe( url );
    expect( alt ).toBe( title );

  });

  test('Debe mostrar el titulo en el componente', () => { 
    
    render( <GifItem title={ title } url={ url } /> );
    expect( screen.getByText( title ) ).toBeTruthy();

  })
});