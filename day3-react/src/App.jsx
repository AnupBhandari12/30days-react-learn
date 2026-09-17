import {useState} from "react";

function App() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const [error , setError] = useState("");
    const [success , setSuccess] = useState("");

    function handleChange(e){
        const {name, value} = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    }

    function handlesubmit(e){
        e.preventDefault();

        if(
            !formData.name ||
            !formData.email ||
            !formData.password   
        ){
            setError("Please fill all the fields");
            setSuccess("");
        } 

        if(formData.password.length < 6){
            setError("Password must be at least 6 characters long");
            setSuccess("");
            return;
        }

        if(!formData.email.includes("@")){
            setError("Please enter a valid email address");
            setSuccess("");
            return;
        }

        console.log(formData);
        setSuccess("Form submitted successfully!");
        setError("");
    }

    return (
        <div>
            <h1>Day 3 : React Form</h1>
            <form onSubmit={handlesubmit}>

            <input type = "text" name="name" value={formData.name} onChange={handleChange} />

            <input type = "email" name="email" value={formData.email} onChange={handleChange} />

            <input type = "password" name="password" value={formData.password} onChange={handleChange} />

            <button type="submit">Submit</button>
            <br/>
            {error && <p style={{color: "red"}}>{error}</p>}
            {success && <p style={{color: "green"}}>{success}</p>}
            </form>
        </div>
    )
}
export default App;