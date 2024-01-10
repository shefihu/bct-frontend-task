import { useParams } from "react-router-dom";

import { homedata } from "../../data/dashboardHomeData";
import Header from "../../components/dashboard/educationalActivities/Header";
import Pending from "../../components/dashboard/educationalActivities/tabs/Pending";
import Submitted from "../../components/dashboard/educationalActivities/tabs/Submitted";
import Marked from "../../components/dashboard/educationalActivities/tabs/Marked";
import { useState } from "react";
import Tabs from "../../components/dashboard/educationalActivities/Tabs";

const EducationalActivity = () => {
  const { id } = useParams();
  const activity = homedata.find((x) => x.id == id);
  const PageDisplay = () => {
    if (page === 1) {
      return <Pending />;
    } else if (page === 2) {
      return <Submitted />;
    } else {
      return <Marked />;
    }
  };
  const [page, setPage] = useState(1);
  const TabTitles = ["Pending", "Submitted", "Marked"];

  return (
    <div>
      <Header activity={activity} />
      <div className="w-full mt-[24px] py-[12px] grid grid-cols-3 ">
        <Tabs TabTitles={TabTitles} page={page} setPage={setPage} />
      </div>
      {PageDisplay}
    </div>
  );
};

export default EducationalActivity;
