import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
export default function Navigation() {
  return (
    <header>
      <nav>
        <ul className={css.nav}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? css.active : css.link)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/movies"
              className={({ isActive }) => (isActive ? css.active : css.link)}
            >
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
