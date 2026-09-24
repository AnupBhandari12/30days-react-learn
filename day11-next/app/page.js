import UserCard from "./components/UserCard";
import AddToCartButton from "./components/AddToCartButton";


export default async function Home(){
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users/1"
  ); 
  
  const user = await response.json();

  return(
    <main>
      <h1>Day 12 Next.js</h1>

      <h2>Server Component</h2>

      <hr/>

      <UserCard
      name={user.name}
      email={user.email}/>

      <hr />

      <h1>Laptop</h1>
      <p>Price : Rs.80000</p>
      <p>16Gb Ram , 512GB SSD</p>

      <AddToCartButton/>
    </main>
  )
}