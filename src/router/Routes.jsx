import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Register from "../auth/Register";
import Login from "../auth/Login";
import PageLayout from "../layouts/PageLayout";
import RecentBills from "../components/RecentBills";
import PrivateRoute from "./PrivateRoutes";
import BillDetails from "../pages/BillDetails";
import AllBills from "../components/AllBills";
import MyPayBills from "../pages/MyPayBills";
import ErrorPage from "../pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        path: '/',
        Component: RecentBills,
        loader: () => fetch('https://utility-bill-server-one.vercel.app/latest-bills'),
        hydrateFallbackElement: <div className="text-center py-10 text-gray-600">Loading your page...</div>
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

      },
      {
        path: '/page/myPayBills',
        loader: () => fetch('https://utility-bill-server-one.vercel.app/myBills'),
        hydrateFallbackElement: <div className="text-center py-10 text-gray-600">Loading your page...</div>,
        element: <PrivateRoute>
          <MyPayBills></MyPayBills>
        </PrivateRoute>

      },
      {
        path: '/page/bills',
        Component: AllBills,
        loader: () => fetch('https://utility-bill-server-one.vercel.app/bills'),
        hydrateFallbackElement: <div className="text-center py-10 text-gray-600">Loading your page...</div>

      }

    ],
  },
  {
    path: '*',
    element: <ErrorPage />,
  }

]);