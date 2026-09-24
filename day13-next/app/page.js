import { updateNote , deleteNote } from "./actions"
import NoteForm from "./components/NoteForm"

export default function Home() {
  return (
    <main>
      <h1>Day 13 Create Note </h1>

      <NoteForm/>

      <hr/>

      <h2>Update Note</h2>

      <form action={updateNote}>
        <input 
        type="number"
        name="id"
        placeholder="Note ID"
        />

        <input 
        type="text"
        name="title"
        placeholder="New title"
        />

        <button type="submit">Update Note</button>
      </form>

      <hr/>

      <form action={deleteNote}>
        <input
        type="number"
        name="id"
        placeholder="Note ID"
        />

        <button type="submit">
          Delete Note
        </button>
      </form>

    </main>
  )
}