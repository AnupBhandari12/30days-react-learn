"use client"

import { useQuery } from "@tanstack/react-query"

async function fetchUsers() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"

    );

    return response.json();

}
export default function UserCount(){
    const {data , isLoading} = useQuery({
        queryKey : ["users"],
        queryFn : fetchUsers,
        staleTime : 10000,
    });
    
    if(isLoading){
        return <p>Loading count...</p>;
    }

    return <h2>Total Users : {data.length}</h2>;
    
}