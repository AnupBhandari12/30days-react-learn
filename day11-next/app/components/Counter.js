"use client";

import { useState } from "react";

export default function Counter(){
    const [count , setCount] = useState(0);

    return (
        <div>
            <h2>Client Component</h2>

            <h3>Count : {count}</h3>

            <button onClick={() => setCount(count + 1)}>
                Increase
            </button>

            <button onClick={() => setCount(count - 1)}>
                Decrese
            </button>
        </div>
    );
}