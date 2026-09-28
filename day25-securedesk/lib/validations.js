import { z} from 'zod';

export const ticketSchema = z.object({
    name : z .string().trim().min(2 , "name must be at least 2 characters.").max(50, "name is too long."),
    email : z .string().trim().toLowerCase().email("please enter a valid email."),
    title : z .string().trim().min(3, "Title must be at least 3 characters").max(100 , "Title is to long."),

    priority : z .enum(["LOW" , "MEDIUM" , "HIGH"]),

    message: z .string() .trim() .min(10 , "Message must be at least 10 characters").max(1000, "Message is too long."),
});