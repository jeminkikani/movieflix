import passport from "passport";
import { NextResponse } from "next/server";

export default (req, res, next) => {
  passport.authenticate("google", (err, user) => {
    if (err || !user) {
      return NextResponse.redirect("/login"); // Redirect to the login page on failure
    }

    // Log in the user and redirect to the home page
    req.logIn(user, (loginErr) => {
      if (loginErr) {
        return NextResponse.redirect("/login");
      }
      return NextResponse.redirect("/");
    });
  })(req, res, next);
};
