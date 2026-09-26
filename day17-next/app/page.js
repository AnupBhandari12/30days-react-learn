import prisma from "../lib/prisma";
import {createUser} from "./actions";


export default async function Home() {
  const users = await prisma.user.findMany({
    where : {
      name: {
        contains : "b",
        mode : "insensitive",
      },
    },
    orderBy : {
      id : "desc",
    }
  });

  console.log(users)

  return (
    <main>
      <h1>Day 17 - Prisma + PostgreSQL</h1>


      <h2>Create User</h2>

      <form action={createUser}>
        <input
          type="text"
          name="name"
          placeholder="Name"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
        />

        <button type="submit">
          Create User
        </button>
      </form>

      <h2>Total Users : {users.length}</h2>

      {users.map((user) => (
        <div key={user.id}>
          <p>{user.id}</p>
          <p>{user.email}</p>

          <hr />
        </div>
      ))}
    </main>
  )

}