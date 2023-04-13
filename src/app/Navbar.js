import Link from "next/link";
import "./navbar.css";

const Navbar = () => {
  return (
    <section className="navbar">
      <h1>Pokemon</h1>
      <ul>
        <li>
          <Link href="">Home</Link>
        </li>
        <li>
          <Link href="">Pokemon Page</Link>
        </li>
      </ul>
    </section>
  );
};

export default Navbar;
