/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { ArrowLeftIcon, BellIcon, SearchIcon } from "../../../assets/svg";

const Header = ({ activity }) => {
  console.log(activity);
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full flex items-center justify-between">
        <button onClick={() => navigate(-1)}>
          <ArrowLeftIcon />
        </button>
        <BellIcon />
      </div>
      <div className="w-full bg-[#ECF1FB33]">
        <h1 className="text-[24px] text-black font-[700] gradient-text">
          {activity.title}
        </h1>
        <div className="mt-[8px] py-[17px] w-full">
          <div className="w-full flex border-[#D5E3FC] border h-[32px] rounded-[4px] items-center px-[11px] py-[8px] gap-x-[11px]">
            <SearchIcon />
            <input
              type="search"
              placeholder="Search for courses, assignment, quizzes, or teacher "
              className="w-full outline-none placeholder:text-[10px] italic placeholder:text-[#275A7F]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
