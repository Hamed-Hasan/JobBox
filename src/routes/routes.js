import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layout/dashboard/Dashboard";
import Main from "../layout/main/Main";
import Home from "../pages/home/Home";

const routes = createBrowserRouter([
{
  path: "/",
  element: <Main/>,
  children: [
    {
      path: "/",
      element: <Home/>,
    },
  ],
},
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

export default routes;
