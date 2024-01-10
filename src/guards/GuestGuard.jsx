/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

export function GuestGuard({ children }) {
  const cookie = Cookies.get();
  const accessCookie = cookie?.accessToken;

  if (accessCookie) {
    return <Navigate to="/dashboard" />;
  }

  return <>{children}</>;
}
