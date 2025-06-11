import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-light bg-light shadow-sm">
        <div className="container">
          <NavLink className="navbar-brand fw-bold" to="/">
            🎲 FantasyGame
          </NavLink>
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
