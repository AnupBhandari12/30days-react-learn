import { NextResponse } from "next/server";

export function proxy(request){
    console.log("Proxy Path" , request.nextUrl.pathname);

    return NextResponse.next();

}

export const config = {
    matcher : ["/api/users/:path*"], 
};