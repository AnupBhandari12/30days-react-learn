"use client";

import { useActionState } from "react";
import { registerUser } from "../actions";

const initialState = {
    error: "",
    success: "",
};

export default function RegisterForm() {
    const [state, formAction, isPending] = useActionState(
        registerUser,
        initialState
    );

    return (
        <form action={formAction}
            className="space-y-4 rounded-xl border bg-white p-6 shadow-sm">
            <div>
                <label className="mb-1 block text-sm font-medium">
                    Name
                </label>

                <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                    className="w-full rounded-lg border px-3 py-2"
                />
            </div>
            <div>
                <lable className="mb-1 block text-sm font-medium">
                    Email
                </lable>
                <input type="Email" className="w-fullrounded-lgborderpx-3py-2"
                    name="email"
                    required
                    placeholder="you@gmail.com" />
            </div>

            <div>
                <label className="mb-1 block text-sm font-medium">
                    Password
                </label>
                <input
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    required
                    className="w-full rounded-lg border px-3 py-2"
                />
            </div>

            {state.error && (
                <p className="text-sm text-red-600">
                    {state.error}
                </p>
            )};

            {state.success && (
                <p className="text-sm text-green-600">
                    {state.success}
                </p>
            )}

            <button type="submit"
            disabled={isPending}
            className="rounded-lg bg-black px-4 py-2 text-white disabled:opacity-50"
            >
                {isPending ? "Creating account..." : "Register"}
            </button>
        </form>
    )
}
