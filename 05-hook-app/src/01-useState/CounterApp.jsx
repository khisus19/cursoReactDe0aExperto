

export const CounterApp = () => {

  const [counter, setCounter] = useState(10);


  return (
    <>
      <h1>Counter:</h1>

      <hr />

      <button onClick={ () => setCounter( counter + 1 ) }>+1</button>

    </>
  )
}
