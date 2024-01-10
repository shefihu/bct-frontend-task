import { BellIcon, Person, SearchIcon } from "../../assets/svg";

const Topbar = () => {
  return (
    <div className="w-full">
      <div className="w-full flex  justify-between items-center">
        <div className="flex gap-x-[15px] items-start">
          <Person />
          <div className="gap-y-[4px]">
            <p className="text-[16px] font-[600] gradient-text leading-[170%]">
              Hello Alex
            </p>
            <p className="text-[#275A7F] text-[12px]">
              It’s time to learn something new
            </p>
          </div>
        </div>
        <div>
          <BellIcon />
        </div>
      </div>
      <div className="mt-[19px] w-full">
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
  );
};

export default Topbar;
