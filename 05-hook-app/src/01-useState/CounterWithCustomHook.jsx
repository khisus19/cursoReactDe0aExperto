import { useCounter } from "../hooks/useCounter.js";

export const CounterWithCustomHook = () => {

  const { counter, increment, decrement, resetCount } = useCounter();

  return (
    <>
      <h1>Counter with Hook: {counter}</h1>
      <hr />

      <button className="btn btn-outline-primary" onClick={ () => increment(2) } >+1</button>
      <button className="btn btn-outline-primary" onClick={ resetCount } >Reset</button>
      <button className="btn btn-outline-primary" onClick={ () => decrement(2) } >-1</button>
    </>
  )
}
