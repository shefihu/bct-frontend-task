import { Outlet } from "react-router-dom";

import Header from "./Header";

// eslint-disable-next-line react/prop-types
export default function GuestLayout({ children }) {
  return (
    <div className="text-black">
      <Header />
      {children ? children : <Outlet />}
    </div>
  );
}
