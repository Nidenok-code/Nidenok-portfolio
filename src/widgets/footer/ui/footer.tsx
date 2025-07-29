import styles from "./footer.module.scss";

import { GithubIcon } from "shared/assets/icons";
import { SOCIAL_LIST } from "shared/consts";

import clsx from "clsx";

interface props {
  newClass?: string;
  isShow?: boolean;
}

export function Footer({ newClass, isShow }: props) {
  return (
    <footer className={clsx(styles.footer, isShow && styles.isShow, newClass)}>
      <h2 className={styles.title}>find me in:</h2>
      <ul className={styles.social_links}>
        {SOCIAL_LIST.map((e, i, a) => {
          if (i === a.length - 1) {
            return (
              <li key={i} className={styles.socialLink}>
                <a href={e.path}>
                  <span>{e.userName}</span>
                  <GithubIcon />
                </a>
              </li>
            );
          }

          return (
            <li key={i} className={styles.socialLink}>
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
