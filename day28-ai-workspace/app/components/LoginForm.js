"use client"
import { useActionState } from "react";
import { LoginUser } from "../actions/auth";

const initialState = {
    success: "",
    error: "",
    fieldErrors: {},
};

export default function LoginForm() {
    const [state, formAction, isPending] = useActionState(
        LoginUser, initialState
    );

    return (
        <form action={formAction} className="space-y-5 rounded-xl border bg-white p-6 shadow-sm">
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

            <button
                type="submit"
                disabled={isPending}
                className="rounded-lg bg-black px-4 py-2 text-white disabled:opacity-50"
            >
                {isPending ? "Logging in..." : "Login"}
            </button>

        </form>
    )
}