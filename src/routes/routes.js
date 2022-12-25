import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layout/dashboard/Dashboard";
import Main from "../layout/main/Main";
import Home from "../pages/home/Home";
import JobDetails from "../pages/home/JobDetails";
import Jobs from "../pages/home/Jobs";
import Login from "../pages/home/Login";
import AccountCreator from "../pages/home/register/AccountCreator";

import CandidateRegistration from "../pages/home/register/CandidateRegistration";
import Signup from "../pages/home/Signup";

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
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/signup",
      element: <Signup/>,
    },
    {
      path: "/job-details",
      element: <JobDetails/>,
    },
    {
      path: "/register",
      element: <AccountCreator/>,
    },
    {
      path: "/register/:type",
      element: <CandidateRegistration/>,
    },
  ],
},
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

export default routes;
