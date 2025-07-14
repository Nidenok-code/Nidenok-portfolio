import type { JSX } from "react";

import RouterProvider from "./routerProvider";

type props = {
  children: JSX.Element;
};

export default function Providers({ children }: props) {
  return <RouterProvider>{children}</RouterProvider>;
}
