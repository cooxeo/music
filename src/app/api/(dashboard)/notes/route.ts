import { NextRequest, NextResponse } from "next/server";
import User from "@/models/users.models";
import { Types } from "mongoose";
import connectDB from "@/db/connectDB";
import Notes from "@/models/books.models";

export const GET = async (request: NextRequest) => {
    try {
        const {searchParams} = new URL(request.url);
        const userId = searchParams.get("userId");

        if(!userId || !Types.ObjectId.isValid(userId)){
            return new NextResponse(
                JSON.stringify({message: "Inavlid or Missing User"}),{status: 400}
            )
        }

        await connectDB();

        const user = await User.findById(userId);
        if(!user){
            return new NextResponse(
                JSON.stringify({message: "User not found"}), {status: 404}
            )
        }

        const notes = await Notes.find({user: new Types.ObjectId(userId)});
        return new NextResponse(
            JSON.stringify(notes),{status: 200}
        )

    } catch (error) {
        return new NextResponse(
            JSON.stringify({message: "Error in fetching notes"+error}), {status: 500}
        )
    }
}

export const POST = async (request: NextRequest) => {
    try {
        const {searchParams} = new URL(request.url);
        const userId = searchParams.get("userId");

        const body = await request.json();
        const {title, description} = body;

        if (!userId || !Types.ObjectId.isValid(userId)) {
            return new NextResponse(
                JSON.stringify({message: "Inavlid or Missing User"}), {status: 400}
            )
        }

        await connectDB();

        const user = await User.findById(userId);
        if (!user) {
            return new NextResponse(JSON.stringify({message: 'User not found'}), {
                status: 404,
            });
        }

        const newNote = new Notes({
            title,
            description,
            user: new Types.ObjectId(userId)
        });

        await newNote.save();

        return new NextResponse(JSON.stringify({message: "Note Created", note: newNote}), {status: 201});
    } catch (error) {
        return new NextResponse(JSON.stringify({message: "Note not created." + error}), {status: 500})
    }

}

