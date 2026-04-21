import { createBrowserRouter } from "react-router";
import Landing from "./pages/Landing";
import Visualization from "./pages/Visualization";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Landing,
  },
  {
    path: "/visualize",
    Component: Visualization,
  },
]);
