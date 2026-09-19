import { useEffect, useState } from "react";

function App(){
  const [note , setNote] = useState(() => {
    return localStorage.getItem("note") || "";
  });
  useEffect(() => {
    localStorage.setItem("note", note);
  }, [note])
  
  return (
    <div>
    <h1>My notes</h1>

    <textarea placeholder= "Write somethings"
    value={note} onChange={(e)=> setNote(e.target.value)}/>

    <h3>Saved note:</h3>
    <p>{note}</p>

    <button onClick= {() => setNote("")}>Clear Note</button>

  </div>
)
}
export default App;