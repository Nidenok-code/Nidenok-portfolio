import MainLayout from "app/layout";
import { NAVIGATION_LIST } from "shared/consts";

import { Routes, Route } from "react-router-dom";

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {NAVIGATION_LIST.map((e) => (
          <Route path={e.path} element={<></>} />
        ))}
      </Route>
    </Routes>
  );
}
