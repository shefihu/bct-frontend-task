/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Card = ({ item }) => {
  console.log(item);
  return (
    <Link
      to={`/activities/${item.id}`}
      className="w-full py-[26px] rounded-[10px] px-[20px]"
      style={{ backgroundColor: item.backgroundColor }}
    >
      <h1 className="font-[600]">{item.title}</h1>
      <p className="mt-[12px] text-[12px]">
        Youe dolor. Morbi consectetur vestibulum turYoue dolor. Morbi
        consectetur consectetur vestibulum t
      </p>
    </Link>
  );
};

export default Card;
