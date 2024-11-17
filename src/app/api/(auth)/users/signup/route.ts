import connectDB from '@/db/connectDB';
import User from '@/models/users.models';
import { NextRequest, NextResponse } from 'next/server';
import bcryptjs from 'bcryptjs'

const ObjectId = require("mongoose").Types.ObjectId;


// export const GET = async () => {
//   try {
//     await connectDB();
//     const users = await User.find();
//     return new NextResponse(JSON.stringify(users), { status: 200 });
//   } catch (error) {
//     return new NextResponse('Error in fetching users' + error, { status: 500 });
//   }
// };



export const POST = async (request: NextRequest) => {
  try {
    const body = await request.json();
    const { username, email, password } = body;

    await connectDB();

    // Check if user with the same email exists
    let existingUser = await User.findOne({ email });
    if (existingUser) {
      return new NextResponse(
        JSON.stringify({ message: 'User with this email already exists' }),
        { status: 400 }
      );
    }

    // Hash the password
    const hashedPassword = await bcryptjs.hash(password, 10);

    // Create the new user
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    return new NextResponse(
      JSON.stringify({ message: 'User created successfully', user: newUser }),
      { status: 201 }
    );
  } catch (error: any) {
    return new NextResponse(
      JSON.stringify({ message: 'User not created', error: error.message }),
      { status: 500 }
    );
  }
};



// export const PATCH = async (request: NextRequest) => {
//   try {
//     const body = await request.json();
//     const { userId, ...updateData } = body;

//     await connectDB();

//     const updatedUser = await User.findByIdAndUpdate(userId, updateData, {
//       new: true,
//     });

//     if (!updatedUser) {
//       return new NextResponse(JSON.stringify({ message: 'User not found' }), {
//         status: 404,
//       });
//     }

//     return new NextResponse(
//       JSON.stringify({ message: 'UserUpadted', user: updatedUser }),
//       { status: 200 }
//     );
//   } catch (error) {
//     return new NextResponse(
//       JSON.stringify({ message: 'User not updated', error }),
//       { status: 500 }
//     );
//   }
// };



// export const DELETE = async (request: NextRequest) => {
//   try {
//     const { searchParams } = new URL(request.url);
//     const userId = searchParams.get('userId');

//     if (!userId) {
//       return new NextResponse(
//         JSON.stringify({ message: 'userId is requird!!!' }),
//         { status: 400 }
//       );
//     }

//     await connectDB();

//     const deleteUser = await User.findByIdAndDelete(userId);

//     if (!deleteUser) {
//       return (
//         new NextResponse(JSON.stringify({ message: 'User not found!!!' })),
//         { status: 404 }
//       );
//     }

//     return new NextResponse(
//       JSON.stringify({ message: 'user deleted', user: deleteUser }),
//       { status: 200 }
//     );
//   } catch (error) {
//     return new NextResponse(
//       JSON.stringify({ message: 'User not deleted', error }),
//       { status: 500 }
//     );
//   }
// };
