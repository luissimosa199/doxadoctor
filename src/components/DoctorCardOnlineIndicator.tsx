import React from "react";

const DoctorCardOnlineIndicator = () => {
  return (
    <div className="flex items-center gap-2 my-1">
      <div className={`rounded-full w-3 h-3 bg-green-400`}></div>
      <p className="text-xs text-center leading-none ">en línea</p>
    </div>
  );
};

export default DoctorCardOnlineIndicator;
