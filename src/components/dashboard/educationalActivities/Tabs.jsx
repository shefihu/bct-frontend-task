/* eslint-disable react/prop-types */

const Tabs = ({ TabTitles, page, setPage }) => {
  return (
    <>
      {TabTitles.map((title, index) => {
        return (
          <div
            key={index}
            className={
              index === page - 1
                ? `flex items-center justify-center px-[12px] min-h-[44px] border-b-2 border-b-primary500 text-[#275A7F] rounded-t-[8px] cursor-pointer`
                : `flex items-center justify-center px-[12px] min-h-[44px] rounded-t-[8px] text-[#B7B8BA] cursor-pointer`
            }
            onClick={() => {
              setPage(index + 1);
            }}
          >
            <span className="text-[15px] ">{title}</span>
          </div>
        );
      })}
    </>
  );
};

export default Tabs;
