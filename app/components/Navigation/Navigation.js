import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/post", label: "Post" },
];

function Navigation() {
  return (
    <header>
      <nav>
        <ul>
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
