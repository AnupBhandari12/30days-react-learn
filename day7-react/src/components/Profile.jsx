import { useContext } from "react";
import UserContext from "../context/userContext";

function Profile(){
    const {name , role} = useContext(UserContext);

    return(
        <div>
            <h2>User Profile</h2>
            <p>Name:{name}</p>
            <p>Role:{role}</p>
        </div>
    )
}
export default Profile;