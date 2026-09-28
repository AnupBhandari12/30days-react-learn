'use server';

import { success } from "zod";
import {ticketSchema } from "../lib/validations";

export async function createTicket(prevState, formData) {
    const rawData = {
        name : formData.get("name"),
        email : formData.get("email"),
        title : formData.get("title"),
        priority : formData.get("priority"),
        message : formData.get("message"),
    };

    const result = ticketSchema.safeParse(rawData);

    if(!result.success){
        const fieldErrors  = result.error.flatten().fieldErrors;

        return {
            success : "",
            error : "Please fix the errors below",
            fieldErrors,
        };

    }


    return {
        success : "Ticket submitted successfully.",
        error : "",
        fieldErrors: {},
    };
    
}