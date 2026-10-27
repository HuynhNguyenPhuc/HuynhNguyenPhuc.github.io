import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

function readTheme() {
  try {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") return saved;
  } catch {
    // Storage can be blocked; fall back to the system setting.
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function Header() {
  const [theme, setTheme] = useState(readTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("theme", theme);
    } catch {
      // Ignore: the choice just won't persist.
    }
  }, [theme]);

  const next = theme === "dark" ? "light" : "dark";

  return (
    <header className="site-header">
      <div className="left">
        <Link className="brand" to="/">
          Phuc's Log
        </Link>
        <button
          type="button"
          className="theme-toggle"
          onClick={() => setTheme(next)}
          aria-label={`Switch to ${next} mode`}
          title={`Switch to ${next} mode`}
        >
          {theme === "dark" ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
            </svg>
          )}
        </button>
      </div>
      <nav aria-label="Main">
        <NavLink to="/" end>
          Posts
        </NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
    </header>
  );
}
