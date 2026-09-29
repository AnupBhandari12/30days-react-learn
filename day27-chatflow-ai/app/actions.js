"use server";

import openai from "../lib/openai";

export async function getAIReply(messages){
    if(!Array.isArray(messages) || messages.length === 0){
        return {
            reply : "",
            error : "No messages found",
        };
    }

    const safeMessages = messages.filter(
        (message) => message && (message.role === "user" || message.role === "assistant") && typeof message.content === "string"
    )
    .map((message) => ({
        role: message.role,
        content : message.content.trim(),
    }))
    .filter((message) => message.content);

    if(safeMessages.length ===  0){
        return {
            reply: "",
            error : "No valid message found.",
        };
    }

    const recentMessages = safeMessages.slice(-10);
    try {
        const response = await openai.responses.create({
            model : "gpt-6-luna",

            instructions : `You are a helpful AI assistand. Answer clearly and simply. Use the previous conversation when it is relevant.`,
            input :  recentMessages,

            max_output_tokens: 500,
        });

        return {
            reply : response.output_text,
            error : "",
        };
    } catch (error) {
        console.error("OpenAI Error : " , error);

        return {
            reply : "",
            error : "AI response generate garna sakiena.",
        };
    }
}