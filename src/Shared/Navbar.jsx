import { NavLink } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
    const links=<>
       <li className="mr-6 "><NavLink to="/">HOME</NavLink></li>
        <li className="mr-6 "><NavLink to="/about">ABOUT US</NavLink></li>
        <li className="mr-6 "><NavLink to="/contact">CONTACT US</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-300 py-5 ">
  <div className="navbar-start">
    <div className="dropdown ">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className=" flex flex-col gap-4 py-8 pl-4 menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-300 rounded-box w-52">
        {
            links
        }
      </ul>
    </div>
    
  </div>
  <div className="navbar-center ">
    <a className="btn btn-ghost text-2xl font-bold  text-emerald-500">MANAGE MY TASK</a>
    </div>
  <div className="navbar-end hidden  lg:flex">
    <ul className=" menu-horizontal px-1  text-xl font-semibold">
      {
        links
      }
    </ul>
  </div>
  
</div>
        </div>
    );
};

export default Navbar;