import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NavBar.module.css";

export default function NavBar() {
  const router = useRouter();
  console.log(router.pathname);

  return (
    <nav class={styles.nav}>
      <Link
        href="/"
        className={[
          `${styles.link}`,
          router.pathname === "/" ? styles.active : "",
        ].join(" ")}
      >
        Home
      </Link>
      <Link
        href="/about"
        className={[
          `${styles.link}`,
          router.pathname === "/about" ? styles.active : "",
        ].join(" ")}
      >
        About
      </Link>
    </nav>
  );
}
