import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layout/dashboard/Dashboard";
import Main from "../layout/main/Main";
import AddJob from "../pages/employeeDashboard/AddJob";
import AppliedJobs from "../pages/employeeDashboard/AppliedJob";
import Home from "../pages/home/Home";
import JobDetails from "../pages/home/JobDetails";
import Jobs from "../pages/home/Jobs";
import Login from "../pages/home/Login";
import AccountCreator from "../pages/home/register/AccountCreator";

import CandidateRegistration from "../pages/home/register/CandidateRegistration";
import Signup from "../pages/home/Signup";
import PrivateRoute from "../utils/PrivateRoute";

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
      path: "/job-details/:id",
      element: <JobDetails/>,
    },
    {
      path: "/register",
      element: (
        <PrivateRoute>
            <AccountCreator/>
        </PrivateRoute>
      ),
    },
    {
      path: "/candidate",
      element: (
        <PrivateRoute>
            <CandidateRegistration/>
        </PrivateRoute>
      ),
    },
  ],
},
  {
    path: "/dashboard",
    element:(
      <PrivateRoute>
          <Dashboard/>
      </PrivateRoute>
    ),
    children: [
      {
        path: "applied-job",
        element: <AppliedJobs/>
      },
      {
        path: "add-job",
        element: <AddJob/>
      }
    ],
  },
]);

export default routes;
