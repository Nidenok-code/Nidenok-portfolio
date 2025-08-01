import styles from "./header.module.scss";
import { MAIN_TITLE, NAVIGATION_LIST } from "shared/consts";
import { linkText } from "shared/lib";
import { Footer } from "widgets/footer";

import { NavLink, Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { clsx } from "clsx";

export function Header() {
  const [isOpen, setIsOpern] = useState<Boolean>(false);
  const location = useLocation();

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        <Link to="/">{linkText(MAIN_TITLE)}</Link>
      </h1>

      <div
        className={clsx(
          styles.navContiner,
          isOpen && styles.openMenu,
          location.pathname === "/" && styles.noFooter
        )}
      >
        <ul className={styles.navList}>
          {NAVIGATION_LIST.map((e, i) => (
            <li
              key={i}
              className={styles.navListItem}
              onClick={() => isOpen && setIsOpern(false)}
            >
              <NavLink
                className={({ isActive }) => (isActive ? styles.active : "")}
                to={e.path}
              >
                {"_" + linkText(e.title)}
              </NavLink>
            </li>
          ))}
        </ul>
        <Footer isShow={location.pathname !== "/"} newClass={styles.footer} />
      </div>

      <button
        onClick={() => setIsOpern(!isOpen)}
        className={clsx(styles.hamburger, isOpen && styles.open)}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
}
