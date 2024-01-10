import Card from "./Card";
import { homedata } from "../../data/dashboardHomeData";

const Cards = () => {
  return (
    <div className="w-full   grid grid-cols-1 gap-y-[25px] mt-[58px]">
      {homedata.map((item, index) => {
        return <Card key={index} item={item} />;
      })}
    </div>
  );
};

export default Cards;
