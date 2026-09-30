"use server";

import { revalidatePath } from "next/cache";

import prisma from "../../lib/prisma"
import { getCurrentUser } from "../../lib/session";
import openai from "../../lib/openai";
export async function sendMessage(formData) {
    const user = await getCurrentUser();

    if (!user) {
        return;
    }

    const conversationId = Number(
        formData.get("conversationId")
    );

    const content = formData.get("content")?.toString().trim();

    if (!Number.isInteger(conversationId)) {
        return;
    }

    if (!content || content.length > 4000) {
        return;
    }

    const conversation = await prisma.conversation.findFirst({
        where: {
            id: conversationId,
            userId: user.id,
        },
        select: {
            id: true,
            title : true,
        },
    });

    if (!conversation) {
        return;
    }

    await prisma.message.create({
        data: {
            role: "USER",
            content,
            conversationId,
        },
    });

    if(conversation.title === "New Chat"){
        const title = content.length > 40 ? `${content.slice(0 , 40)}...` : content ;

        await prisma.conversation.update({
            where : {
                id : conversationId,
            },
            data : {
                title,
            },
        });
    }

    const recentMessages = await prisma.message.findMany({
        where: {
            conversationId,
        },
        orderBy: {
            createdAt: "desc",
        },
        take: 10,
    })

    const history = recentMessages.reverse().map((message) => ({
        role: message.role === "USER" ? "user" : "assistant", content: message.content,
    }));



    
    try {
        const response = await openai.responses.create({
            model: "gpt-6-luna",
            instructions:
                "You are a helpful AI assistant. Give clear and concise answers.",
            input: history,
            max_output_tokens: 500,
        });
    
    
        const aiReply = response.output_text?.trim();
    
    
        if(aiReply){
            await prisma.message.create({
                data : {
                    role : "ASSISTANT",
                    content : aiReply,
                    conversationId, 
                }
            });
        }
    } catch (error) {
        console.error("OpenAI error : " , error);
    }
    revalidatePath(`/chat/${conversationId}`);
}
