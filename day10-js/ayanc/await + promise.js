async function getTodoAndUser (){
    try {
        const [userResponse , todoResponse] = await Promise.all([
            fetch("https://jsonplaceholder.typicode.com/users/1"),
            fetch("https://jsonplaceholder.typicode.com/todos/1"),
        ])

        if(!userResponse.ok || !todoResponse.ok){
            throw new Error("failed to fetch data");
        }

        const user = await userResponse.json();
        const todo = await todoResponse.json();

        console.log("user")
        console.log(user)
        console.log("todo")
        console.log(todo)

    } catch (error) {
        console.log("Error: " , error.message);
    }
}

getTodoAndUser();