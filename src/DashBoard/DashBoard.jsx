import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaTasks } from "react-icons/fa";
import { VscGitPullRequestGoToChanges } from "react-icons/vsc"
import { CgProfile } from "react-icons/cg"
const DashBoard = () => {
    return (
        <div className="drawer lg:drawer-open bg-base-200 min-h-screen   mx-auto ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex  flex-col">
          {/* Page content here */}
          <div className="w-full bg-emerald-500 p-4 lg:p-0">
          <label htmlFor="my-drawer-2" className="btn bg-transparent border-none  drawer-button lg:hidden"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></label>
          </div>
          <div className="m-10 ">
            <Outlet></Outlet>
          </div>
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
          <ul className=" menu bg-black  text-emerald-500 p-4 w-80 min-h-screen pt-32 lg:pt-4  text-2xl flex gap-5">
            {/* Sidebar content here */}
            {
                <>
                    <li>
                        <NavLink to="/dashboard/tasks" className="flex">
                        <FaTasks />
                        Tasks
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/createtask" >
                        <VscGitPullRequestGoToChanges />
                        Create Task
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/profile" >
                        <CgProfile />
                        Profile
                        </NavLink>
                    </li>
                </>
              
            }
            <div className="divider divider-neutral"></div>
            <li> <NavLink to="/" className="flex">
                        <FaHome></FaHome>
                         Home Page
                        </NavLink></li>
          </ul>
        
        </div>
      </div>
    );
};

export default DashBoard;