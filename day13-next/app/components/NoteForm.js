"use client";

import { useActionState } from "react";
import { createNote } from "../actions";

const initialState = {
    success: false,
    message: "",
};

export default function NoteForm() {
    const [state, formAction, isPending] = useActionState(
        createNote,
        initialState
    );
    return (
        <form action={formAction}>
            <input
                type="text"
                name="title"
                placeholder="Note title"
            />

            <br /><br />

            <textarea
                name="content"
                placeholder="Write your note"
            />

            <br /><br />

            <button type="submit" disabled={isPending}>
                {isPending ? "Submitting..." : "create Note"}
            </button>

            {state.message &&(
                <p>{state.message}</p>
            )}


        </form>
    )
}