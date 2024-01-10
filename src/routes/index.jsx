import { createBrowserRouter } from "react-router-dom";
import { GuestGuard } from "../guards/GuestGuard";
import GuestLayout from "../layout/guestLayout";

import Login from "../pages/auth/Login";
import DashboardLayout from "../layout/dashboardLayout";
import AuthGuard from "../guards/AuthGuard";
import Dashboard from "../pages/user/Home";
import EducationalActivity from "../pages/user/EducationalActivity";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <GuestGuard>
        <GuestLayout />
      </GuestGuard>
    ),
    children: [
      {
        path: "/",
        element: <Login />,
      },
    ],
  },
  {
    path: "/",
    element: (
      <AuthGuard>
        <DashboardLayout />
      </AuthGuard>
    ),
    children: [
      { path: "dashboard", element: <Dashboard /> },
      { path: "activities/:id", element: <EducationalActivity /> },
    ],
  },
]);
