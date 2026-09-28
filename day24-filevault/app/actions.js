'use server'

import {writeFile , unlink} from "fs/promises";
import path from "path"
import { revalidatePath } from "next/cache";

export async function uploadFile( ptevState , formData) {
    const file = formData.get('file');

    if(!file || file.size ===0){
        
        return {
            error : "Please select a file.",
            success : "",
        };
    }

    const allowedTypes = [
        "application/pdf",
        "image/jpeg",
        "image/png",
    ];

    if(!allowedTypes.includes(file.type)){
        return {
             error : "Only PDF , JPG and PNG files are allowed.",
             success : "",
        };
    }

    const maxSize = 5 * 1024 * 1024;

    if(file.size > maxSize){
        return {
            error : "File must be smaller than 5 MB",
            success : "",
        };
    }

    const bytes = await file.arrayBuffer();

    const buffer = Buffer.from(bytes);

    const extension = path.extname(file.name);

    const uniqueName = `${Date.now()}${extension}`

    const uploadPath = path.join(
        process.cwd(),
        "public",
        "uploads",
        uniqueName
    );

    await writeFile(uploadPath , buffer);
    revalidatePath("/")
    return {
        error : "",
        success : `File upload Successfually : ${uniqueName}`,
    }

}


export async function deleteFile(formData){
    const fileName = formData.get("fileName");

    if(!fileName){
        return;
    }

    const saferFileName = path.basename(fileName);

    const filePath = path.join(
        process.cwd(),
        "public",
        "uploads",
        saferFileName
    );

    await unlink(filePath);

    revalidatePath("/")
}