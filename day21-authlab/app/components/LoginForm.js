"use client";

import { useActionState } from "react";
import { loginUser } from "../actions";

const initialState = {
  error: "",
  success: "",
};

export default function LoginForm() {
  const [state, formAction, isPending] = useActionState(
    loginUser,
    initialState
  );

  return (
    <form
      action={formAction}
      className="space-y-4 rounded-xl border bg-white p-6 shadow-sm"
    >
      <div>
        <label className="mb-1 block text-sm font-medium">
          Email
        </label>

        <input
          type="email"
          name="email"
          placeholder="you@example.com"
          required
          className="w-full rounded-lg border px-3 py-2"
        />
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
      )}

      {state.success && (
        <p className="text-sm text-green-600">
          {state.success}
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
  );
}