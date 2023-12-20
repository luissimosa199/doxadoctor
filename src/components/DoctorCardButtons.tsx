import React from "react";
import ShareNodesSvg from "./icons/ShareNodesSvg";
import CheckSvg from "./icons/CheckSvg";

const DoctorCardButtons = () => {
  return (
    <div className="flex gap-2 w-full justify-around p-2">
      <button className="hover:text-green-500 transition">
        <div className="bg-blue-300 rounded-full h-6 w-6 flex justify-center items-center pr-1 ">
          <ShareNodesSvg />
        </div>
      </button>
      <button className="hover:text-yellow-500 transition w-6">
        <div className="w-6 bg-green-400 rounded-full h-6 flex justify-center items-center">
          <CheckSvg />
        </div>
      </button>
      <button className="hover:text-blue-500 transition ">
        <div className="bg-blue-300 rounded-md h-6 px-2 py-1 text-sm font-semibold">
          Perfil
        </div>
      </button>
    </div>
  );
};

export default DoctorCardButtons;
