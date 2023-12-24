
import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../../HomeComponent/Home/Home";
import SignUp from "../SignUp";
import SignIn from "../SignIn";
import Root from "../../HomeComponent/Home/Root";
import About from "../../NavComponents/About";
import Contact from "../../NavComponents/Contact";


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
        },
        {
            path:"/about",
            element:<About></About>
        },
        {
            path:"/contact",
            element:<Contact></Contact>
        }
      ]
    },
  ]);
  export default router;