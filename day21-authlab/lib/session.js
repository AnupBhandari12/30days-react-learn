import crypto from "crypto"
import { cookies } from "next/headers";
import prisma from "./prisma";

const SESSION_COOKIE_NAME = "auth_session";

function hashToken(token) {
    return crypto
        .createHash("sha256")
        .update(token)
        .digest("hex");
}

export async function createSession(userId) {

    await prisma.session.deleteMany({
  where: {
    userId,
    expiresAt: {
      lt: new Date(),
    },
  },
});
    const token = crypto.randomBytes(32).toString("hex")

    const tokenHash = hashToken(token);

    const expiresAt = new Date(
        Date.now() + 7 * 24 * 60 * 60 * 1000
    );

    await prisma.session.create({
        data: {
            tokenHash,
            userId,
            expiresAt,
        },
    });

    const cookieStore = await cookies();

    cookieStore.set(SESSION_COOKIE_NAME, token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        expires: expiresAt,
        path: "/",
    });

}   

export async function getCurrentUser() {
    const cookieStore = await cookies();

    const token = cookieStore.get(SESSION_COOKIE_NAME)?.value;

    if(!token){
        return null;
    }

    const tokenHash = hashToken(token);

    const session = await prisma.session.findUnique({
        where : {
            tokenHash,
        },
        include : {
            user : true,
        },
    });

    if(!session){
        return null;
    }

    if(session.expiresAt < new Date()){
        return null;
    }

    return session.user;

}

export async function deleteCurrentSession() {
    const cookieStore = await cookies()

    const token = cookieStore.get(SESSION_COOKIE_NAME)?.value;

    if(token){
        const tokenHash = hashToken(token);

        await prisma.session.deleteMany({
            where : {
                tokenHash,
            },
        });
    }

    cookieStore.delete(SESSION_COOKIE_NAME);
}