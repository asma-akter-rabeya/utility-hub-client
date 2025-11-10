import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Register from "../auth/Register";
import Login from "../auth/Login";
import PageLayout from "../layouts/PageLayout";

export const router = createBrowserRouter([
  {
    path:'/',
    Component: MainLayout,
    children: [
      {
        
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
      }
      
    ],
  },
]);