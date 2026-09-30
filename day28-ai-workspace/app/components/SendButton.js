"use client";

import {useFormStatus} from "react-dom"

export default function SendButton(){
    const {pending} = useFormStatus();

    return (
        <button  type="submit" disabled={pending} className="self-end rounded-lg black px-5 py-3 text-black disabled:opacity-50">
            {pending ? "Sending..." : "send"}
        </button>
    )
}