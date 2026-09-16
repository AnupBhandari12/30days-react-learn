import {useState} from 'react';

function App() {
  const [count, setCount] = useState(0);

  const [login , setLogin] = useState(false);

  const [showProfile , setShowProfile] = useState(false);

  function increase (){
    setCount(count + 1);

  } 
  function decrease (){
    setCount(count - 1);
  }
  function reset (){
    setCount(0);
  }
  return (
    <div>
      <h1>Day 1</h1>
      <h2>Count:{count}</h2>
      <button onClick = {increase}>Increase</button>
      <button onClick = {decrease}>Decrease</button>
      <button onClick = {reset}>Reset</button>
      <hr/>

      <h2>
        {login ? "Welcome" : "Please Login"}
      </h2>

      <button onClick={() => setLogin(!login)}>
        {login ? "Logout" : "Login"}
      </button>

      <hr/>
      <h2>Profile status</h2>

      <button onClick= {() => setShowProfile(!showProfile)} >
        {showProfile ? "Hide Profile" : "Show Profile"}
      </button>

      {showProfile &&(
        <div>
          <h3>Profile visible</h3>
          <p>Name : Anup</p>
          <p>Role: Full Stack Developer </p>
        </div>
      )}

    </div>
  )

} export default App;