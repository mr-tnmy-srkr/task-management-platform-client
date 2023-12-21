import { useState } from "react";
import { GrLogout } from "react-icons/gr";
import { BiHomeAlt } from "react-icons/bi";
import { MdAddTask } from "react-icons/md";
import { GoTasklist } from "react-icons/go";
import { AiOutlineBars } from "react-icons/ai";
import useAuth from "../../hooks/useAuth";
import { NavLink, useNavigate } from "react-router-dom";

const DashboardSidebar = () => {
  const { user, logOut } = useAuth();
  const [isActive, setActive] = useState(false);
  const navigate = useNavigate();

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-gray-100 text-gray-800 flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            {/* <Logo /> */}
            Task Management
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className="w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-blue-300 text-black mx-auto text-2xl">
              {/* <Logo /> */}
              Task Management
            </div>
          </div>

          <div className="text-center my-4">
            <label tabIndex={0} className="cursor-pointer">
              <div className="avatar">
                <div className="w-10 rounded-full">
                  <img src={user?.photoURL} />
                </div>
              </div>
            </label>
            <br />
            <label className="text-2xl text-blue-900">
              {user?.displayName}
            </label>
          </div>
          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-6">
            <nav>
              <NavLink
                to={`add-task`}
                end
                className={({ isActive }) =>
                  `flex items-center px-4 py-2   transition-colors duration-300 transform  hover:bg-gray-200  hover:rounded-lg  hover:text-gray-700 ${
                    isActive
                      ? "bg-blue-400 dark:bg-gray-300 text-xl font-semibold text-zinc-700 rounded-lg shadow-xl"
                      : "text-gray-800 text-lg font-medium"
                  }`
                }
              >
              <MdAddTask />
                 <span className="ml-4">Add Task</span>
              </NavLink>
           
              <NavLink
                to={`manage-task`}
                end
                className={({ isActive }) =>
                  `flex items-center px-4 py-2   transition-colors duration-300 transform  hover:bg-gray-200  hover:rounded-lg  hover:text-gray-700 ${
                    isActive
                      ? "bg-blue-400 dark:bg-gray-300 text-xl font-semibold text-zinc-700 rounded-lg shadow-xl"
                      : "text-gray-800 text-lg font-medium"
                  }`
                }
              >
              <GoTasklist />
                 <span className="ml-4">Manage Task</span> 
              </NavLink>
            </nav>
          </div>
        </div>

        <div>
          <hr />

          <button
            onClick={() => navigate("/")}
            className="flex w-full items-center  px-4 py-2 mt-5 text-lg text-black rounded-lg hover:bg-white dark:hover:bg-gray-300 hover:text-gray-700 transition-colors duration-300 transform"
          >
            <BiHomeAlt className="w-5 h-5" />
            <span className="mx-4 font-medium">Home</span>
          </button>

          <button
            onClick={logOut}
            className="flex w-full items-center px-4 py-2 mt-5 rounded-lg text-black text-lg hover:bg-white dark:hover:bg-gray-300 hover:text-gray-700 transition-colors duration-300 transform"
          >
            <GrLogout className="w-5 h-5" />
            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};
export default DashboardSidebar;
