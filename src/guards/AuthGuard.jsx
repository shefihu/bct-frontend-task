/* eslint-disable react/prop-types */

import { Navigate, useLocation } from "react-router-dom";

import Cookies from "js-cookie";
import Login from "../pages/auth/Login";

export function AuthGuard({ children }) {
  //   const { isAuthenticated } = useAppSelector((state) => state.auth);
  const location = useLocation();

  const accessToken = Cookies.get("accessToken");

  if (!accessToken) {
    return location.pathname !== "/signin" ? (
      <Navigate to="/signin" state={{ from: location }} replace />
    ) : (
      <Login />
    );
  }

  return <>{children}</>;
}

export default AuthGuard;
