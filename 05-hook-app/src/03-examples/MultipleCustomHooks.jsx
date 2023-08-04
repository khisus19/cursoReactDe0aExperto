import { useCounter, useFetch } from "../hooks";
import { CharacterDisplay, CharacterLoading } from "./";

const API = "https://rickandmortyapi.com/api/character/";

export const MultipleCustomHooks = () => {
  
  const { counter, increment, decrement } = useCounter(1);

  const id = ( counter <= 0 ) ? 1 : counter
  
  const { data, isLoading, hasError } = useFetch(`${API}${id}`);
  const { name, species, image } = !!data && data;

  return (
    <>
      <h1 className="mt-2">Rick and Morty characters</h1>

      {isLoading ? <CharacterLoading /> : <CharacterDisplay name={ name } species={ species } image={ image } />}

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
