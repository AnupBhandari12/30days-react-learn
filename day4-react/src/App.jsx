import {useState , useEffect} from "react"

function App(){
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

   useEffect(()=>{
    async function fetchData(){
        try{
            const  response = await fetch("https://jsonplaceholder.typicode.com/users");
            if(!response.ok){
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            setUsers(data);
        }catch(error){
            setError(error.message);
        }finally{
            setLoading(false);
        }
    }
    fetchData();
   }, []);

   if(loading){
    return <h2>Loading...</h2>
   }

   if(error){
    return <h2>Error: {error}</h2>
   }

    return(
        <div>
            <h2>Day 4 React</h2>
            {users.map((user)=>(
                <div key={user.id}>
                    <h3>{user.name}</h3>
                    <p>{user.email}</p>
                    <p>{user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
                </div>
            ))}
        </div>
    )

}
export default App;