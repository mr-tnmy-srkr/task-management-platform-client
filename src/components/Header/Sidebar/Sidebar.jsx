import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Sidebar = () => {
  const {user,logOut} = useAuth()
  return (
    <div className="flex flex-col gap-2">
      {/* Navbar menu content here */}
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? 'btn btn-primary ' : 'btn btn-ghost '
        }
      >
      Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? 'btn btn-primary ' : 'btn btn-ghost '
        }
      >
        About
      </NavLink>
      {user?.email && <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          isActive ? 'btn btn-primary ' : 'btn btn-ghost '
        }
      >
    Dashboard
      </NavLink>}
      {user?.email ?  <div
                  onClick={logOut}
                  className="text-center cursor-pointer btn btn-ghost"
                >
                  Logout
                </div>
            :<NavLink
        to="/login"
        className={({ isActive }) =>
          isActive ? 'btn btn-primary ' : 'btn btn-ghost '
        }
      >
        Login
      </NavLink>}
    </div>
  );
};

export default Sidebar;
