"use server"

import prisma from "../lib/prisma";
import bcrypt from "bcryptjs";

export async function registerUser(prevState , formData) {
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    if(!name || !email || !password){
        return{
            error : "All fields are required",
        };
    }

    const normalizedEmail = email.trim().toLowerCase();

    const existingUser = await prisma.user.findUnique({
        where : {
            email : normalizedEmail,
        }
    });

    if(existingUser){
        return {
            error : "Email already registered.",
        };
    }

    const passwordHash = await bcrypt.hash(password , 12);

    await prisma.user.create({
        data : {
            name : name.trim(),
            email : normalizedEmail,
            passwordHash,
        },
    });

    return {
        success : "Account created successfully .",
    }
}

export async function loginUser(prevState , formData) {
    const email = formData.get("email");
    const password = formData.get("password");

    if(!email || !password){
        return{
            error : "Email and password are required",
            success : "",
        };
    }

    const normalizedEmail = email.trim().toLowerCase();

    const user = await prisma.user.findUnique({
        where : {
            email : normalizedEmail
        },
    });

    if(!user) {
        return {
            error : "Invalid email or Password",
            success : "",
        };
    }

    const passwordMatch = await bcrypt.compare(password , user.passwordHash);

    if(!passwordMatch){
        return  {
            error : "Invalid email or password",
            success : "",
        };
    }

    return {
        error : "",
        success : `Welcome back,${user.name}`,
    }
}