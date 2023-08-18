import { useState } from "react"

export const useCounter = ( initialValue = 1 ) => {

  const [counter, setCounter] = useState( initialValue );

  const increment = ( value = 1 ) => {
    setCounter( prevCount => prevCount + value );
  }

  const decrement = ( value = 1 ) => {
    if (counter < 1) return setCounter( 1 );
    setCounter( prevCount => prevCount - value );
  }

  const resetCount = () => {
    setCounter( initialValue );
  }

  return {
    counter,
    increment,
    decrement,
    resetCount
  }
}