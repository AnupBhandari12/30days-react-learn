"use server";

import { redirect } from "next/navigation";
import prisma from "../../lib/prisma";
import { getCurrentUser } from "../../lib/session";

export async function createConversation() {
    const user = await getCurrentUser();

    if(!user){
        redirect("/login");
    }

    const conversation = await prisma.conversation.create({
        data : {
            title : "New Chat",
            userId : user.id,
        },
    });

    redirect(`/chat/${conversation.id}`);
}