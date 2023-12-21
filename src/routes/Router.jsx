import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/Errorpage";
import Home from "../pages/Home/Home";
import MainLayout from "../layout/MainLayout";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "about",
      },
      {
        path: "login",
        element:<Login/>
      },
      {
        path: "signup",
        element:<Signup/>
      },
    ],
  },
]);
export default router;
