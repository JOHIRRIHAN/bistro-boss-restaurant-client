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
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";
// import AddItems from "../Pages/Dashboard/AddItems/AddItems";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import ManageBooking from "../Pages/Dashboard/ManageBooking/ManageBooking";
import AdminRouts from "./AdminRouts";
import AddItems from "../Pages/AddItems/AddItems";
import UpdateItem from "../Pages/Dashboard/UpdateItem/UpdateItem";
import Payment from "../Pages/Dashboard/Payment/Payment";

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
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: 'cart',
        element: <Cart></Cart>
      },
      {
        path: 'payment',
        element: <Payment></Payment>
      },
      {
        path: 'addItems',
        element: <AdminRouts><AddItems></AddItems></AdminRouts>
      },
      // admin 
      {
        path: '/dashboard/adminHome',
        element: <AdminRouts><AdminHome></AdminHome></AdminRouts>
      },
      {
        path: '/dashboard/manageItems',
        element: <AdminRouts><ManageItems></ManageItems></AdminRouts>
      },
      {
        path: '/dashboard/manageBooking',
        element: <ManageBooking></ManageBooking>
      },
      {
        path: '/dashboard/allUser',
        element: <AdminRouts><AllUsers></AllUsers></AdminRouts>
      },
      {
        path: '/dashboard/updateItem/:id',
        element: <AdminRouts><UpdateItem></UpdateItem></AdminRouts>,
        loader: ({params}) => fetch(`http://localhost:5000/menus/${params.id}`)
      },

    ]
  },
]);
