import { useFetch } from "../hooks/useFetch";
import { useCounter } from "../hooks/useCounter.js";

const API = "https://rickandmortyapi.com/api/character/";

export const MultipleCustomHooks = () => {
  
  const { counter, increment, decrement } = useCounter(1);

  const id = ( counter <= 0 ) ? 1 : counter
  
  
  const { data, isLoading, hasError } = useFetch(`${API}${id}`);
  const { name, species, image } = !!data && data;

  return (
    <>
      <h1 className="mt-2">Rick and Morty characters</h1>


      <div className="alert alert-info text-center">{
        isLoading ? "Loading..." :
        <blockquote className="blockquote text-end">
          <p className="mb-1">{ name }</p>
          <footer className="blockquote-footer">{ species }</footer>
          <img src={ image } />
        </blockquote>
        
      }</div>

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
