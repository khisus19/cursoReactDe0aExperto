import { useDispatch, useSelector } from "react-redux";

import viteLogo from '/vite.svg';
import './App.css';
import { decrement, increment, incrementBy } from "./store/slices/counter/counterSlice";

function App() {

  const { counter, times } = useSelector( state => state.counter );
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={ viteLogo } className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>count is { counter }</h1>
      <div className="card">
        <button onClick={ () => dispatch( increment() ) }>
          Increment
        </button>
        <button onClick={ () => dispatch( decrement() ) }>
          Decrement
        </button>
        <button onClick={ () => dispatch( incrementBy(times) ) }>
          Increment by { times }
        </button>
      </div>
    </>
  )
}

export default App
