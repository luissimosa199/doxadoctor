"use client";

import React, { useState } from "react";
import DoctorPageButtons from "./DoctorPageButtons";
import CurrentTabContent from "./CurrentTabContent";
import { Tabs } from "@/types";

const DoctorPageBody = () => {
  const [currentTab, setCurrentTab] = useState<Tabs>("informacion");

  return (
    <div className="bg-white">
      <div className="shadow-md">
        <DoctorPageButtons
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
        />
      </div>

      <CurrentTabContent currentTab={currentTab} />
    </div>
  );
};

export default DoctorPageBody;
