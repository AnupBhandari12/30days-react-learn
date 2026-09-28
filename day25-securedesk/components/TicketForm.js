'use client'

import { useActionState } from "react"
import { createTicket } from "../app/actions"

const initialState = {
    success: "",
    error: "",
    fieldErrors: {},
};

export default function TicketForm() {
    const [state, formAction, isPending] = useActionState(
        createTicket,
        initialState
    );

    return (
        <form action={formAction}
            className="space-y-5 rounded-xl border bg-white p-6 shadow-sm"
        >
            <div>
                <label className="mb-1 block font-medium">
                    Name
                </label>
                <input
                    type="text"
                    name="name"
                    className="w-full rounded-lg border p-2" />

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
                    type="text"
                    name="email"
                    className="w-full rounded-lg border p-2" />

                {state.fieldErrors?.email?.[0] && (
                    <p className="mt-1 text-sm text-red-600">
                        {state.fieldErrors.email[0]}
                    </p>
                )}
            </div>

            <div>
                <label className="mb-1 block font-medium">Title</label>

                <input
                    type="text"
                    name="title"
                    className="w-full rounded-lg border p-2"
                />

                {state.fieldErrors?.title?.[0] && (
                    <p className="mt-1 text-sm text-red-600">
                        {state.fieldErrors.title[0]}
                    </p>
                )}
            </div>

            <div>
                <label className="mb-1 block font-medium">Priority</label>

                <select
                    name="priority"
                    className="w-full rounded-lg border p-2"
                >
                    <option value="LOW">Low</option>
                    <option value="MEDIUM">Medium</option>
                    <option value="HIGH">High</option>
                </select>

                {state.fieldErrors?.priority?.[0] && (
                    <p className="mt-1 text-sm text-red-600">
                        {state.fieldErrors.priority[0]}
                    </p>
                )}
            </div>

            <div>
                <label className="mb-1 block font-medium">Message</label>

                <textarea
                    name="message"
                    rows="5"
                    className="w-full rounded-lg border p-2"
                />

                {state.fieldErrors?.message?.[0] && (
                    <p className="mt-1 text-sm text-red-600">
                        {state.fieldErrors.message[0]}
                    </p>
                )}
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
                {isPending ? "Submitting..." : "Submit Ticket"}
            </button>
        </form>
    );
}