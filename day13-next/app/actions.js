"use server";
import { revalidatePath } from "next/cache";

export async function createNote(  prevState , formData) {
    const title = formData.get("title");
    const content = formData.get("content");

    if(!title || !content){
        return{
            success : false,
            message : "Title and content are required",
        };
    }

    const response = await fetch(
           "https://jsonplaceholder.typicode.com/posts",
           {
            method: "POST",
            headers : {
                "Content-Type" : "application/json"
            },

            body : JSON.stringify({
                title,
                body: content,
                userId: 1,
            }),

          } 
    );

    const newNote = await response.json();

    revalidatePath("/")

    return {
        success: true,
        message : `Note created with Id ${newNote.id}`,
    };
}

export async function updateNote(formData) {

    const id = formData.get("id");
    const title = formData.get("title");

    if(!id || !title){
        console.log("ID and title are required");
        return;
    }

    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        {
            method : "PUT",
            headers : {
                "content-Type" : "application/json",
            },
            body: JSON.stringify({
                id,
                title,
                body : "Updated note",
                userId: 1,
            }),
        }
    );

    const updatedNote = await response.json();

    console.log("Updated Note: ");
    console.log(updatedNote);

    revalidatePath("/");
}

export async function deleteNote(formData){

    const id = formData.get("id");

    if(!id){
        console.log("ID is required");
        return;
    }
    const response = await fetch(
     `https://jsonplaceholder.typicode.com/posts/${id}`,
     {
        method: "DELETE",
     }   
    );

    if(response.ok){
        console.log(`Note ${id} deleted`);
    }
    revalidatePath("/");
}
