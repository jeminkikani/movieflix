import NextAuth from "next-auth/next";
import GoogleProviders from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProviders({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
});

export { handler as GET, handler as POST, handler as PUT, handler as DELETE };
