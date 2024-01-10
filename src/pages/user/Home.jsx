import Cards from "../../components/dashboard/Cards";
import Topbar from "../../components/dashboard/Topbar";

const Dashboard = () => {
  return (
    <div className=" w-full py-[15px]">
      <Topbar />
      <Cards />
    </div>
  );
};

export default Dashboard;
