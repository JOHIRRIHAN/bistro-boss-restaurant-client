import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Homes/Home/Home";
import Main from "../Layout/Main/Main";
import Manu from "../Pages/Menu/Menu/Manu";
import Shop from "../Pages/Shop/Shop/Shop";
import LogIn from "../Pages/LogIn/LogIn";
import SignIn from "../Pages/SignIn/SignIn";
import PrivateRoute from "./PrivateRoute";
import Secret from "../Pages/Sheared/Secret/Secret";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Cart from "../Pages/Dashboard/Cart";

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
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>
      },
      {
        path: 'secret',
        element: <PrivateRoute><Secret></Secret></PrivateRoute>
      }
    ],

  },
  {
    path: 'dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: 'cart',
        element: <Cart></Cart>
      }
    ]
  },
]);
