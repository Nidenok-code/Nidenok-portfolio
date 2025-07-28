import styles from "./styles.module.scss";
import { Header, Footer } from "widgets";

import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className={styles.layout}>
      <Header />

      <main className={styles.main}>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
