import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../components/GifGrid"


describe('Pruebas en <GifGrid />', () => { 

  const category = "Saitama"

  test('Debe mostrar el loading inicialmente', () => { 
    
    render( <GifGrid category={ category } />);
    expect( screen.getByText( "Cargando..." ) );
    expect( screen.getByText( category ) );
  });

  test('Debe mostrar items cuando se cargan las imagenes useFetchGifs', () => { 




  });


});