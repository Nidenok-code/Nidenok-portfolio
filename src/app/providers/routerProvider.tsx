import type { JSX } from "react";

import { BrowserRouter } from "react-router-dom";

type props = {
  children: JSX.Element;
};

export default function RouterProvider({ children }: props) {
  return <BrowserRouter>{children}</BrowserRouter>;
}
