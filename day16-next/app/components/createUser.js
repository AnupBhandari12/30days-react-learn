"use client";

import { useMutation , useQueryClient } from "@tanstack/react-query";

async function createUser(newUser) {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser),
        }
    );

    if ((!response.ok)) {
        throw new Error("failed to create user");
    }

    return response.json()
}

export default function CreateUser() {
    const queryclient = useQueryClient();
    const mutation = useMutation({
        mutationFn: createUser,

        onSuccess: (newUser) => {
            queryclient.setQueryData(["users"] , (oldUsers) => {
                return [...oldUsers , newUser]
            })
        }
    });

    function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);

        const newUser = {
            name: formData.get("name"),
            email: formData.get("email"),

        };

        mutation.mutate(newUser);
    }

    return (
        <div>
            <h2>Create User</h2>

            <form onSubmit={handleSubmit}>
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
                    {mutation.isPending ? "Creating..." : "Create User"}
                </button>
            </form>

            {mutation.isSuccess && (
                <p>
                    User created : {mutation.data.name}
                </p>

            )};

            {mutation.isError && (
                <p>
                    Error : {mutation.error.message}
                </p>
            )}
        </div>
    )
}