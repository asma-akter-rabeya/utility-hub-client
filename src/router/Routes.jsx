import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Register from "../auth/Register";
import Login from "../auth/Login";
import PageLayout from "../layouts/PageLayout";
import RecentBills from "../components/RecentBills";
import PrivateRoute from "./PrivateRoutes";
import BillDetails from "../pages/BillDetails";

export const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        path: '/',
        Component: RecentBills,
        loader: () => fetch('http://localhost:3000/latest-bills'),
      }
    ]

  },
  {
    path: "/page",
    element: <PageLayout />,
    children: [
      {
        path: '/page/register',
        Component: Register,

      },
      {
        path: '/page/login',
        Component: Login,
      },
      {
        path: '/page/bills/:id',
        element: <PrivateRoute>
          <BillDetails></BillDetails>
        </PrivateRoute>

      }

    ],
  },
]);