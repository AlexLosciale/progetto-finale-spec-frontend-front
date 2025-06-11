import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-light bg-white shadow-sm fixed-top border-bottom">
        <div className="container">
          <NavLink className="navbar-brand fw-bold" to="/">
            🎲 FantasyGame
          </NavLink>
          <NavLink className="nav-link text-secondary" to="/">
            <strong>Home</strong>
          </NavLink>
        </div>
      </nav>
      <div style={{ height: "70px" }}></div>
    </header>
  );
}
