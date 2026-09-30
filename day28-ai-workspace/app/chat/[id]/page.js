import { notFound, redirect } from "next/navigation";
import Link from "next/link";

import prisma from "../../../lib/prisma";
import { getCurrentUser } from "../../../lib/session";
import { sendMessage } from "../../actions/message";
import SendButton from "../../components/SendButton";

export default async function ChatPage({ params }) {
    const user = await getCurrentUser();

    if (!user) {
        redirect("/login");
    }

    const { id } = await params;

    const conversationId = Number(id);


    if (!Number.isInteger(conversationId)) {
        notFound();
    }

    const conversation = await prisma.conversation.findFirst({
        where: {
            id: conversationId,
            userId: user.id,
        },

        include: {
            messages: {
                orderBy: {
                    createdAt: "asc",
                }
            }
        }
    })

    if (!conversation) {
        notFound()
    }

    return (
        <main className="min-h-screen bg-gray-50">
            <div className="mx-auto max-w-3xl p-6">

                {/* Header */}
                <div className="mb-6 flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold">
                            {conversation.title}
                        </h1>

                        <p className="mt-1 text-sm text-gray-500">
                            Conversation #{conversation.id}
                        </p>
                    </div>

                    <Link
                        href="/dashboard"
                        className="rounded-lg border px-4 py-2"
                    >
                        Back to Dashboard
                    </Link>
                </div>

                {/* Messages */}
                <div className="mt-8 space-y-4">
                    {conversation.messages.length === 0 ? (
                        <p className="text-gray-500">
                            No messages yet. Start the conversation.
                        </p>
                    ) : (
                        conversation.messages.map((message) => (
                            <div
                                key={message.id}
                                className={`rounded-xl border p-4 ${message.role === "USER"
                                        ? "ml-auto max-w-2xl bg-black text-white"
                                        : "mr-auto max-w-2xl bg-white"
                                    }`}
                            >
                                <p className="text-sm font-semibold">
                                    {message.role === "USER" ? "You" : "AI"}
                                </p>

                                <p className="mt-2 whitespace-pre-wrap">
                                    {message.content}
                                </p>
                            </div>
                        ))
                    )}
                </div>

                {/* Message Form */}
                <form
                    action={sendMessage}
                    className="mt-6 flex gap-3"
                >
                    <input
                        type="hidden"
                        name="conversationId"
                        value={conversation.id}
                    />

                    <textarea
                        name="content"
                        placeholder="Type your message..."
                        required
                        maxLength={4000}
                        className="min-h-24 flex-1 rounded-xl border bg-white p-3"
                    />

                    <SendButton />
                </form>

            </div>
        </main>
    );

}