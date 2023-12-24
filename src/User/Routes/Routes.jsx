
import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../../HomeComponent/Home/Home";
import SignUp from "../SignUp";
import SignIn from "../SignIn";
import Root from "../../HomeComponent/Home/Root";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/signup",
            element:<SignUp></SignUp>
        },
        {
            path:"/signin",
            element:<SignIn></SignIn>
        }
      ]
    },
  ]);
  export default router;