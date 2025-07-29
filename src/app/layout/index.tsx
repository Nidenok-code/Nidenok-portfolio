import styles from "./styles.module.scss";
import { Header, Footer } from "widgets";

import { Outlet, useLocation } from "react-router-dom";

export default function MainLayout() {
  const location = useLocation();

  return (
    <div className={styles.layout}>
      <Header />

      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer isShow={location.pathname === "/"} />
    </div>
  );
}
