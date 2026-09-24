"use client"

import { useState } from "react"

export default function UserCard({name , email}){
    const [showEmail , setShowEmail] = useState(false);

    return(
        <div>
            <h2>{name}</h2>

            <button onClick={() => setShowEmail(!showEmail)}>
                {showEmail ? "Hide Email" : "Show Email"}
            </button>
            {showEmail && <p>{email}</p>}
        </div>
    )
}