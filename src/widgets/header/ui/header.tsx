import styles from "./header.module.scss";
import { MAIN_TITLE, NAVIGATION_LIST } from "shared/consts";
import { linkText } from "shared/lib";

import { NavLink, Link } from "react-router-dom";

export function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        <Link to="/">{linkText(MAIN_TITLE)}</Link>
      </h1>
      <ul className={styles.navList}>
        {NAVIGATION_LIST.map((e, i) => (
          <li key={i} className={styles.navListItem}>
            <NavLink
              className={({ isActive }) => (isActive ? styles.active : "")}
              to={e.path}
            >
              {"_" + linkText(e.title)}
            </NavLink>
          </li>
        ))}
      </ul>
    </header>
  );
}
