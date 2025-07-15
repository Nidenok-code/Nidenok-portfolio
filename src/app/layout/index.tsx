import styles from "./styles.module.scss";
import { Header } from "widgets/header";

import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}
