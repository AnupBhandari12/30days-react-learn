import {useState} from "react";
import ThemeContext from "./context/themeContext";
import ThemeDisplay from "./components/ThemeDisplay";
import UserContext from "./context/userContext";
import Profile from "./components/Profile";


function App(){
 const [theme , setTheme] = useState("light");
 
 function toggletheme(){
  setTheme(theme === "light" ? "dark" : "light");
 }

 return(
  <ThemeContext.Provider value={{theme , toggletheme}}>
    <UserContext.Provider value={{
      name: "Anup",
      role: "full Stack Developer"
    }}>
      <h1>Day 7 Context API</h1>

    <ThemeDisplay />
    <hr/>
    <Profile/>
    </UserContext.Provider>
  </ThemeContext.Provider>
 )
}
export default App;