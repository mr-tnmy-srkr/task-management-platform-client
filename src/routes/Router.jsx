import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/Home/Errorpage/Errorpage";
import Home from "../pages/Home/Home";
import MainLayout from "../layout/MainLayout";

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
    ],
  },
]);
export default router;
