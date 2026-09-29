'use client'

import { useState, useRef, useEffect } from "react";
import { getAIReply } from "../actions";


export default function ChatBox() {
    const [error, setError] = useState("");

    const [messages, setMessages] = useState([
        {
            role: "user",
            content: "What is React",
        },
        {
            role: "assistant",
            content: "React is a JaveScript library for building user interfaces.",
        },
    ]);

    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const bottomRef = useRef(null);


    useEffect(() => {
        bottomRef.current?.scrollIntoView({
            behavior: "smooth",
        });
    }, [messages]);

    async function handleSend() {
        if (!input.trim() || isLoading) return;

        const userMessage = {
            role: "user",
            content: input.trim(),
        };

        const updatedMessages = [
            ...messages,
            userMessage,
        ];

        setMessages(updatedMessages);
        setInput("");
        setIsLoading(true);
        setError("");

        const result = await getAIReply(updatedMessages);

        if (result.error) {
            setError(result.error);
        }

        if (result.reply) {
            const assistantMessage = {
                role: "assistant",
                content: result.reply,
            }

            setMessages((prev) => [
                ...prev,
                assistantMessage,
            ]);

        }

        setIsLoading(false)
    }
    function handleKeyDown(e) {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();

            handleSend()
        }
    }
    function handleClearChat() {
        setMessages([])
    }



    return (
        <div>

            <div>
                {messages.map((message, index) => (
                    <div key={index}>
                        <p>
                            {message.role} : {message.content}
                        </p>
                    </div>
                ))}

                <div ref={bottomRef} />
            </div>

            <button
                onClick={handleClearChat}
                disabled={isLoading}
                className="rounded-lg border px-3 py-2 text-sm"
            >
                Clear Chat
            </button>

            {error && (
                <p className="mt-3 text-sm text-red-600">
                    {error}
                </p>
            )}

            <div className="mt-6 flex gap-2">
                <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Type a message..."
                    rows="3"
                    className="flex-1 resize-none rounded-lg border p-3"
                />
                {isLoading && (
                    <p className="mt-3 text-gray-500">
                        AI is thinking...
                    </p>
                )}

                <button onClick={handleSend} disabled={isLoading} className="rounded-lg bg-black px-4 py-2 text-white disabled:opacity-50">
                    {isLoading ? "Thinking" : "Send"}
                </button>
            </div>
        </div>
    )
}