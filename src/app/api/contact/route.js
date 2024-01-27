import dbConn from "@/utils/dbConn";
import Contact from "@/models/contact";
import User from "@/models/user";
import { NextResponse } from "next/server";
import NextAuth from "next-auth/next";

export async function POST(req, res) {
  try {
    const body = await req.json();
    await dbConn();

    await Contact.create(body);

    return NextResponse.json(
      {
        message: "Message sent successfully!",
      },
      {
        status: 200,
      }
    );
  } catch (e) {
    return NextResponse.json(
      { message: "Server error, please try again!" },
      { status: 500 }
    );
  }
}

// ==============================================LOGIN APIS================================================================

export default NextAuth({
  callbacks: {
    // ... (previous callbacks)

    async session(session, user) {
      const dbUser = await User.findOne({ email: user.email });

      if (dbUser) {
        session.user = dbUser;
      }

      return session;
    },
  },
});
