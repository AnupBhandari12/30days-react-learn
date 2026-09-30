"use server";

import bcrypt from "bcryptjs";
import prisma from "../../lib/prisma"
import { registerSchema ,loginschema  } from "../../lib/validations";
import { createSession , deleteCurrentSession } from "../../lib/session";
import { redirect } from "next/navigation";



export async function registerUser(prevState , formData) {
    const rawData = {
        name : formData.get("name"),
        email : formData.get("email"),
        password : formData.get("password"),
    };

    const result = registerSchema.safeParse(rawData);

    if(!result.success){
        return {
            success : "",
            error : "Please fix the errors below",
            fieldErrors : result.error.flatten().fieldErrors,
        };
    }

    const {name , email , password} = result.data;

    const existingUser = await prisma.user.findUnique({
        where : {
            email,
        },
    });

    if(existingUser){
        return {
            success : "",
            error : "An account with this email already exists",
            fieldErrors : {},
        };
    }

    const passwordHash = await bcrypt.hash(password , 12);

    await prisma.user.create({
        data : {
            name , email , passwordHash, role: "USER",
        },
    });

    return {
        success : "Account created successfully",
        error : "",
        fieldErrors : {},
    };
}

export async function LoginUser(PrevState, formData) {
    const rawData = {
        email : formData.get("email"),
        password : formData.get("password"),
    };

    const result = loginschema.safeParse(rawData);

    if(!result.success){
        return {
            success : "",
            error : "Please fix the errors below.",
            fieldErrors : result.error.flatten().fieldErrors,
        };
    }

    const {email , password} = result.data;

    const user = await prisma.user.findUnique({
        where : {
            email ,
        },
    });

    if(!user){
        return {
            success: "",
            error : "Invalid email or password",
            fieldErrors: {},
        };
    }

    const passwordMatches = await bcrypt.compare(
        password,
        user.passwordHash
    );

    if(!passwordMatches){
        return {
            success : "",
            error : "Invalid email or password",
            fieldErrors : {},
        };
    }
    await createSession(user.id);

    redirect("/dashboard")
}
export async function logoutUser(){
    await deleteCurrentSession();

    redirect("/login")
}