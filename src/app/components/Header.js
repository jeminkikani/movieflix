"use client";
import { useState } from "react";
import styles from "@/app/styles/navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import Nav from "@/app/components/Nav";
import { signIn } from "next-auth/react";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginWithGoogle = () => {
    signIn("google");
  };

  return (
    <header className={styles.main_header}>
      <div className={styles.navbar_brand}>
        <Link href="/">
          <Image
            src="/ce0ea57f2f381a24fe79438c436f9568.jpg"
            alt="my logo image"
            width={120}
            height={90}
          />
        </Link>
      </div>
      <Nav />
      <div
        className={styles.login_button}
        style={{ display: "flex", alignItems: "center" }}
      >
        {/* <Link href="/favorite" style={{ margin: "0" }}>
          <button className={styles.fav}>Favorite</button>
        </Link>
        <div className="one">
          {isLoggedIn ? (
            <button onClick={() => signOut()}>Logout</button>
          ) : (
            <button className="two" onClick={loginWithGoogle}>
              Login with Google
            </button>
          )} */}
        {/* </div> */}
      </div>
    </header>
  );
};

export default Header;
