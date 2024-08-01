
import connectDB from "@/db/connectDB";
import User from "@/models/users.models";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        await connectDB();
        const users = await User.find();
        return new NextResponse(JSON.stringify(users),{status: 200});
    } catch (error) {
        return new NextResponse("Error in fetching users"+error, {status: 500})
    }
}