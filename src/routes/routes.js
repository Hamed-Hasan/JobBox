import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layout/dashboard/Dashboard";
import Main from "../layout/main/Main";
import Home from "../pages/home/Home";
import JobDetails from "../pages/home/JobDetails";
import Jobs from "../pages/home/Jobs";

const routes = createBrowserRouter([
{
  path: "/",
  element: <Main/>,
  children: [
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/jobs",
      element: <Jobs/>,
    },
    {
      path: "/job-details",
      element: <JobDetails/>,
    },
  ],
},
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

export default routes;
