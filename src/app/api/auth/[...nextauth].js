import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // Add other providers if needed
  ],
  database: process.env.DATABASE_URL,
  callbacks: {
    async signIn(user, account, profile) {
      // If needed, you can customize the signIn callback
      return true;
    },
    async session(session, user) {
      // If needed, you can customize the session callback
      return session;
    },
  },
});
