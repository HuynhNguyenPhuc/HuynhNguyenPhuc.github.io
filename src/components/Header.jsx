import { Link, NavLink } from "react-router-dom";

const sections = [
  ["Research", "research"],
  ["Experience", "experience"],
  ["Projects", "projects"],
  ["Contact", "contact"],
];

export default function Header() {
  return (
    <header className="site-header">
      <Link className="brand" to="/">
        Huynh Nguyen Phuc
      </Link>
      <nav aria-label="Main">
        {sections.map(([label, id]) => (
          <Link key={id} to={`/#${id}`}>
            {label}
          </Link>
        ))}
        <NavLink to="/blog">Blog</NavLink>
      </nav>
    </header>
  );
}
