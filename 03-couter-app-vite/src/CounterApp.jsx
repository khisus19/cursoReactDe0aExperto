import { useState } from 'react';
import PropTypes from "prop-types";


export const CounterApp = ({ value }) => {
  
  const [ counter, setCounter ] = useState(value);

  const handleAdd = () => setCounter( counter + 1);
  const handleSub = () => setCounter( counter - 1);
  const handleReset = () => setCounter( value );

  return (
    <>
      <h1>Counter App</h1>
      <h3>{ counter }</h3>
      <button onClick={ handleAdd } >+1</button>
      <button onClick={ handleSub } >-1</button>
      <button aria-label="btn-reset" onClick={ handleReset } >Reset</button>
    </>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number,
}

CounterApp.defaultProps = {
  name: "Jesús Álvarez",
  subtitle: "No hay subtitulo",
  // title: "No hay titulo",
}