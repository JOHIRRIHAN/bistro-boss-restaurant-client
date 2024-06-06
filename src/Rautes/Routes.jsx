import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Homes/Home/Home";
import Main from "../Layout/Main/Main";
import Manu from "../Pages/Menu/Menu/Manu";
import Shop from "../Pages/Shop/Shop/Shop";
import LogIn from "../Pages/LogIn/LogIn";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Manu></Manu>,
      },
      {
        path: "/shop/:category",
        element: <Shop></Shop>
      },
      {
        path: "/login",
        element: <LogIn></LogIn>
      }
    ],
  },
]);
