import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import dbConnect from "@/utils/dbConn";
import Contact from "@/models/contact";

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
    },
    async (accessToken, refreshToken, profile, done) => {
      // Custom logic to handle user data and store it in the database
      try {
        await dbConnect();
        const existingUser = await Contact.findOne({ googleId: profile.id });

        if (existingUser) {
          return done(null, existingUser);
        }

        const newUser = await Contact.create({
          googleId: profile.id,
          email: profile.emails[0].value,
          // Add any other user-related data you want to store
        });

        return done(null, newUser);
      } catch (error) {
        return done(error, null);
      }
    }
  )
);

export default passport.authenticate("google", { scope: ["profile", "email"] });
