import styles from "@/app/styles/navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import Nav from "@/app/components/Nav";

const Header = () => {
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
    </header>
  );
};

export default Header;
