import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar/Navbar";
import Sidebar from "../components/Header/Sidebar/Sidebar";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="2xl:container mx-auto ">
  
      <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-base-200">
          <Navbar />
        </div>
        {/* Page content here */}
         <Outlet />
        <Footer />
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu p-4 w-80 min-h-full bg-base-200">
          {/* Sidebar content here */}
          <Sidebar />
        </div>
      </div>
    </div>
    </div>
  );
};

export default MainLayout;
