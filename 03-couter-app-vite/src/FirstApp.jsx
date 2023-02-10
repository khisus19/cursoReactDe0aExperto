
export const FirstApp = () => {
  const funcionPrueba = ( a, b = 2) => {
    return a + b
  } 


  return <h1>{ funcionPrueba( 5, 5) }</h1>
}