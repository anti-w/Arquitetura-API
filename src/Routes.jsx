import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Animes from "./views/Animes";
import Home from "./views/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Animes />,
  },
  {
    path: "/animes",
    element: <Animes />,
  },
]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
