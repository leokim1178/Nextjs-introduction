import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  console.log(router.pathname);

  return (
    <nav>
      <Link
        legacyBehavior
        href="/"
        style={{ color: router.pathname === "/" ? "red" : "blue" }}
      >
        Home
      </Link>
      <hr></hr>
      <Link
        legacyBehavior
        href="/about"
        style={{ color: router.pathname === "/about" ? "red" : "blue" }}
      >
        About
      </Link>
    </nav>
  );
}
