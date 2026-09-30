"use client"

import { useActionState } from "react"
import { registerUser } from "../actions/auth"

const initialState = {
    success: "",
    error: "",
    fieldErrors: {},
};

export default function RegisterForm() {
    const [state, formAction, isPending] = useActionState(
        registerUser,
        initialState
    );

    return (
        <form action={formAction} className="space-y-5 rounded-xl border bg-white p-6 shadow-sm"
        >
            <div>
                <label className="mb-1 block font-medium">
                    Name
                </label>

                <input
                    type="text"
                    name="name"
                    className="w-full rounded-lg border p-2"
                />

                {state.fieldErrors?.name?.[0] && (
                    <p className="mt-1 text-sm text-red-600">
                        {state.fieldErrors.name[0]}
                    </p>
                )}
            </div>

            <div>
                <label className="mb-1 block font-medium">
                    Email
                </label>

                <input
                    type="email"
                    name="email"
                    className="w-full rounded-lg border p-2"
                />

                {state.fieldErrors?.email?.[0] && (
                    <p className="mt-1 text-sm text-red-600">
                        {state.fieldErrors.email[0]}
                    </p>
                )}
            </div>

            <div>
                <label className="mb-1 block font-medium">
                    Password
                </label>

                <input
                    type="password"
                    name="password"
                    className="w-full rounded-lg border p-2"
                />

                {state.fieldErrors?.password?.[0] && (
                    <p className="mt-1 text-sm text-red-600">
                        {state.fieldErrors.password[0]}
                    </p>
                )}
            </div>

            {state.error && (
                <p className="text-sm text-red-600">
                    {state.error}
                </p>
            )}

            {state.success && (
                <p className="text-sm text-gray-600">
                    {state.success}
                </p>
            )}

            <button
                type="submit"
                disabled={isPending}
                className="rounded-lg bg-black px-4 py-2 text-white disabled:opacity-50"
            >
                {isPending ? "Creating account..." : "Register"}
            </button>



        </form>
    )
}