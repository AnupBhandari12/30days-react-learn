import {useContext} from "react";
import ThemeContext from "../context/themeContext";

function ThemeDisplay(){
    const {theme , toggletheme} = useContext(ThemeContext);

    return(
        <div>
            <h2>Curreny Theme: {theme}</h2>

            <button onClick={toggletheme} >
                Toggle Theme
            </button>   
        </div>
    );
}

export default ThemeDisplay;