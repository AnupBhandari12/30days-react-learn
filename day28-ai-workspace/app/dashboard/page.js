import Link from "next/link";
import { redirect } from "next/navigation";
import { getCurrentUser } from "../../lib/session";
import { logoutUser } from "../actions/auth";
import { createConversation } from "../actions/conversation";
import prisma from "../../lib/prisma";


export default async function DashboardPage() {
    const user = await getCurrentUser();

    if (!user) {
        redirect("/login");
    }

    const conversations = await prisma.conversation.findMany({
        where: {
            userId: user.id,
        },
        orderBy: {
            updatedAt: "desc",
        },
    });

    return (
        <main className="min-h-screen bg-gray-50">
            <div className="mx-auto max-w-3xl p-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold">
                            AI Workspace
                        </h1>

                        <p className="mt-2 text-gray-600">
                            Welcome, {user.name}
                        </p>
                    </div>

                    <form action={logoutUser}>
                        <button
                            type="submit"
                            className="rounded-lg border px-4 py-2"
                        >
                            Logout
                        </button>
                    </form>
                </div>

                <form action={createConversation} className="mt-8">
                    <button
                        type="submit"
                        className="rounded-lg bg-black px-4 py-2 text-white"
                    >
                        + New Chat
                    </button>
                </form>

                <section className="mt-8">
                    <h2 className="text-xl font-semibold">
                        Your Conversations
                    </h2>

                    <div className="mt-4 space-y-3">
                        {conversations.length === 0 ? (
                            <p className="text-gray-500">
                                No conversations yet.
                            </p>
                        ) : (
                            conversations.map((conversation) => (
                                <Link
                                    key={conversation.id}
                                    href={`/chat/${conversation.id}`}
                                    className="block rounded-xl border bg-white p-4 shadow-sm"
                                >
                                    <p className="font-medium">
                                        {conversation.title}
                                    </p>

                                    <p className="mt-1 text-sm text-gray-500">
                                        Chat #{conversation.id}
                                    </p>
                                </Link>
                            ))
                        )}
                    </div>
                </section>
            </div>
        </main>
    );
}