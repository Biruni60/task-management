
import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../../HomeComponent/Home/Home";
import SignUp from "../SignUp";
import SignIn from "../SignIn";
import Root from "../../HomeComponent/Home/Root";
import About from "../../NavComponents/About";
import Contact from "../../NavComponents/Contact";
import DashBoard from "../../DashBoard/DashBoard";
import Profile from "../../DashBoard/Profile";
import CreateTask from "../../DashBoard/CreateTask";
import Tasks from "../../DashBoard/Tasks";


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
    {
    path:"/dashboard",
    element:<DashBoard></DashBoard>,
    children:[
        {
            path:'/dashboard/profile',
            element:<Profile></Profile>
        },
        {
            path:'/dashboard/createtask',
            element:<CreateTask></CreateTask>
        },
        {
            path:'/dashboard/tasks',
            element:<Tasks></Tasks>
        }
    ]
    }
  ]);
  export default router;