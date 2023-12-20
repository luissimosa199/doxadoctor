import React from "react";
import DoctorPageOpinionsTab from "./DoctorPageOpinionsTab";
import DoctorPageInfoTab from "./DoctorPageInfoTab";

const CurrentTabContent = ({ currentTab }: { currentTab: string }) => {
  return (
    <div>
      <div className={`${currentTab !== "informacion" ? "hidden" : "block"}`}>
        <DoctorPageInfoTab />
        <div className="w-ful h-32 bg-gray-200 mx-4 mb-4"></div>
      </div>
      <div className={`${currentTab !== "opiniones" ? "hidden" : "block"}`}>
        <DoctorPageOpinionsTab />
      </div>
    </div>
  );
};

export default CurrentTabContent;
