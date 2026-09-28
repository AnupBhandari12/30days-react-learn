"use client";

import { useActionState } from "react";
import { uploadFile } from "../actions";

const initialstate = {
    error : "",
    success : "",
};

export default function UploadForm(){
    const [state , formAction , isPending] = useActionState(
        uploadFile,
        initialstate
    );

    return (
        <form action={formAction} className="mt-8 space-y-4 border bg-white p-6 shadow-sm">
            <div>
                <label >
                    Select File
                </label>

                <input 
                type="file"
                name="file"
                accept=".pdf, .jpg, .jpeg, .png"
                className="w-full rounded-lg border p-2"/>
            </div>

            {state.error &&(
                <p className="text-sm text-red-600">
                    {state.error}
                </p>
            )}

            {state.success && (
                <p className="text-sm text-green-600">
                    {state.success}
                </p>
            )}

            <button type="submit" disabled={isPending}
            className="rounded-lg bg-black px-4 py-2 text-white disabled:opacity-50">
                {isPending ? "Uploading..." : "Upload File"}
            </button>

        </form>
    )
}