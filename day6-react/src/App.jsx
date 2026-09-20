import useCounter  from './hooks/useCounter';
import useLocalStorage from "./hooks/useLocalStorage"


function App(){
  const {count , increase, decrease, reset} = useCounter();

  const [name , setName] = useLocalStorage("name", "")

  return(
    <div>
      <h1>Day 6 Custom Hook</h1>

      <h2>Count: {count}</h2>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease} >decrease</button>
      <button onClick={reset}>Reset</button> 

      <input type='text'
      placeholder='Enter your name '
      value={name}
      onChange={(e) => setName(e.target.value)} />
    <h2>Hello {name}</h2>

    </div>
  )
}

export default App;
