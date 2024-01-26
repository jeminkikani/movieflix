import styles from "@/app/styles/common.module.css";
import Link from "next/link";

const NotFound = () => {
  const getHome = () => {
    router.push("/");
  };
  return (
    <section className={styles.container}>
      <div className={styles.error_page}>
        <h1 className={styles.not_found}>404</h1>
        <h2>Not Found</h2>
        <p>Could not find requested resource</p>
      </div>
    </section>
  );
};

export default NotFound;
