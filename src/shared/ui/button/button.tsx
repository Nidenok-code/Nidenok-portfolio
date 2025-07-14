import clsx from "clsx";
import styles from "./button.module.scss";

interface props {
  children: string;
  style?: string;
}

export function Button({ children, style }: props) {
  return (
    <button className={clsx(styles.button, style && styles[style])}>
      {children}
    </button>
  );
}
