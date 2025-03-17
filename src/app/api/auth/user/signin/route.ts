import { NextRequest, NextResponse } from "next/server";
import {User} from "@/models/userModel"
import  connectDB  from "@/dbConfig/dbConfig";
import bcrypt from "bcrypt";

export async function POST(req: NextRequest) {
  try {
    // Parse request body
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: "Email and password are required" },
        { status: 400 }
      );
    }

    // Connect to database
    await connectDB();

    // Find user by email
    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json(
        { success: false, message: "Invalid email or password" },
        { status: 401 }
      );
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return NextResponse.json(
        { success: false, message: "Invalid email or password" },
        { status: 401 }
      );
    }

    // Generate tokens
    const accessToken = user.generateAccessToken();
    const refreshToken = await user.generateRefreshToken();

    // Store refresh token in the database (optional)
    user.refreshToken = refreshToken;
    await user.save();

    // Set refresh token as HTTP-only cookie
    const response = NextResponse.json(
      { success: true, message: "Login successful", accessToken },
      { status: 200 }
    );

    response.headers.set(
      "Set-Cookie",
      `refreshToken=${refreshToken}; HttpOnly; Path=/; Secure; SameSite=Strict`
    );
    response.headers.set(
      "Set-Cookie",
      `accessToken=${accessToken}; HttpOnly; Path=/; Secure; SameSite=Strict`
    );

    return response;
  } catch (error) {
    console.error("Login Error:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
