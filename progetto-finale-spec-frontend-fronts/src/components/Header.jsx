import { NavLink } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-light bg-white shadow-sm fixed-top border-bottom">
        <div className="container d-flex justify-content-between align-items-center">
          <NavLink className="navbar-brand fw-bold" to="/">
            🎲 FantasyGame
          </NavLink>

          <div className="d-flex align-items-center gap-3">
          <NavLink
            className="nav-link text-secondary fw-bold link-primary"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className="nav-link text-secondary fs-5 link-primary"
            to="/boardgames"
          >
            <i className="bi bi-heart-fill"></i>
          </NavLink>
          </div>
        </div>
      </nav>
      <div style={{ height: "70px" }}></div>
    </header>
  );
}
