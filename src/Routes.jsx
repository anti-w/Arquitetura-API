import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Animes from "./views/Animes";
import Home from "./views/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/animes",
    element: <Animes />,
  },
]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
