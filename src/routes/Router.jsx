import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/Errorpage";
import Home from "../pages/Home/Home";
import MainLayout from "../layout/MainLayout";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import DashboardLayout from "../layout/DashboardLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";
import AddTask from "../components/DashboardComp/AddTask/AddTask";
import ManageTask from "../components/DashboardComp/ManageTask/ManageTask";
import UpdateTask from "../components/DashboardComp/UpdateTask/UpdateTask";
import axios from "axios";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "about",
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "add-task",
        element: (
          <PrivateRoute>
            <AddTask />
          </PrivateRoute>
        ),
      },
      {
        path: "update-task/:id",
        element: (
          <PrivateRoute>
            <UpdateTask />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          axios(
            `https://task-management-platform-server-sable.vercel.app/get-task/${params.id}`
          ),
      },
      {
        path: "manage-task",
        element: (
          <PrivateRoute>
            <ManageTask />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
export default router;
