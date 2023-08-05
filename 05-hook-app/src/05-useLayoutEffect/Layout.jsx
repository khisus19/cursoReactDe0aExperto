import { useCounter, useFetch } from "../hooks";
import { CharacterDisplay, CharacterLoading } from "../03-examples";

// const API = "https://rickandmortyapi.com/api/character/";
const QUOTEAPI = "https://type.fit/api/quotes";

export const Layout = () => {
  
  const { counter, increment, decrement } = useCounter(1);

  const id = ( counter < 0 ) ? 0 : counter
  
  // const { data, isLoading, hasError } = useFetch(`${API}${id}`);
  // const { name, species, image } = !!data && data[0];
  const { data, isLoading, hasError } = useFetch(`${QUOTEAPI}`);
  const { text, author } = !!data && data[counter];

  return (
    <>
      <h1 className="mt-2">FreeCodeCamp Quotes API</h1>

      {isLoading ? <CharacterLoading /> : <CharacterDisplay text={ text } author={ author } />}

      <button 
        className="btn btn-primary"
        onClick={() => increment()}
      >Change character</button>
      

      <button 
        className="btn btn-primary mt-2"
        disabled={ isLoading || id <= 1 }
        onClick={() => decrement()}
      >Return to previous character</button>
      
    </>
  )
}
