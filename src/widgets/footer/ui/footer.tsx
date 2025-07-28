import styles from "./footer.module.scss";

import { GithubIcon } from "shared/assets/icons";
import { SOCIAL_LIST } from "shared/consts";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <h2 className={styles.title}>find me in:</h2>
      <ul className={styles.social_links}>
        {SOCIAL_LIST.map((e, i, a) => {
          if (i === a.length - 1) {
            return (
              <li className={styles.socialLink}>
                <a href={e.path}>
                  <span>{e.userName}</span>
                  <GithubIcon />
                </a>
              </li>
            );
          }

          return (
            <li className={styles.socialLink}>
              <a href={e.path}>
                <GithubIcon />
              </a>
            </li>
          );
        })}
      </ul>
    </footer>
  );
}
