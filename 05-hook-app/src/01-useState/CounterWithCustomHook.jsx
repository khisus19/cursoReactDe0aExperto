import { useCounter } from "../hooks/useCounter.js";

export const CounterWithCustomHook = () => {

  const { counter, increment, decrement, resetCount } = useCounter();

  return (
    <>
      <h1>Counter with Hook: {counter}</h1>
      <hr />

      {/* Se debe enviar una funcion flecha porque si no increment tomará el objeto del evento onClick */}
      <button className="btn btn-outline-primary" onClick={ () => increment(2) } >+1</button> 
      
      {/* Aquí no hace falta la flecha ya que no necesito enviar un argumento a resetCount */}
      <button className="btn btn-outline-primary" onClick={ resetCount } >Reset</button>
      
      {/* Se debe enviar una funcion flecha porque si no increment tomará el objeto del evento onClick */}
      <button className="btn btn-outline-primary" onClick={ () => decrement(2) } >-1</button>
    </>
  )
}
