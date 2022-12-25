import Dashboard from "../layout/dashboard/Dashboard";

const { createBrowserRouter } = require("react-router-dom");

const routes = createBrowserRouter([
    {
        path: "/dashboard",
        element: <Dashboard />,
      },
])

export default routes;