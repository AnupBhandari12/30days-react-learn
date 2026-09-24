"use client"

import {useState } from "react";

export default function AddToCartButton(){
    const [added , setAdded] = useState(false);

    return (
        <button onClick={() => setAdded(!added)}>
            {added ? "Added to Cart" : "Add to Cart"}
        </button>
    )
}