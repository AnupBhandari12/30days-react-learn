"use client"
import UserCount from "./components/UserCount";
import {useQuery} from "@tanstack/react-query";
import CreateUser from "./components/createUser";

async function fetchUsers() {

  await new Promise((resolve) => setTimeout(resolve , 2000));
  
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users",
  );

  if(!response){
    throw new Error("Failed to fetch users");
  }

  return response.json();

}

export default function Home() {
  const {
    data ,
    isLoading, 
    isError,
    error,
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ["users"],
    queryFn : fetchUsers,
    staleTime: 1000,
  });


  if(isLoading){
    return <h2>Loading users...</h2>;
  }

  if(isError){
    return <h2>Error : {error.message}</h2>
  }

  return (
    <main>
      <h1>Day 16 TanStack Query</h1>
      <UserCount />

      <hr/>

<CreateUser />
      <hr/>

      <button onClick={() => refetch()}>
        {isFetching ? "Refreshing..." : "Refresh Users"}
      </button>

      {data.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      ))}
    </main>
  );
}