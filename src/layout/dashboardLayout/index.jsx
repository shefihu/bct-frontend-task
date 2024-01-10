import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  // function ScrollBoy() {
  //   const mainContent = document.getElementById("main");
  //   if (mainContent) {
  //     mainContent.scrollTo({
  //       top: 0,
  //       behavior: "smooth",
  //     });
  //   }
  // }
  return (
    <div className="w-full md:hidden block h-screen bg-white px-[24px] py-[15px]  text-black relative">
      <div id="main" className="w-full ">
        <Outlet />
      </div>
    </div>
  );
}
