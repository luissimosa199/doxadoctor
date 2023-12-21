import React from "react";
import ShareNodesSvg from "./icons/ShareNodesSvg";
import CheckSvg from "./icons/CheckSvg";
import StarSvg from "./icons/StarSvg";
import ChatBoxSvg from "./icons/ChatBoxSvg";
import VideoCamSvg from "./icons/VideoCamSvg";

const DoctorCardButtons = () => {
  return (
    <div className="flex gap-2 w-full justify-around p-2">
      <button className="hover:text-green-500 transition">
        <div className=" h-6 w-6 flex justify-center items-center ">
          <StarSvg />
        </div>
      </button>
      <button className="hover:text-yellow-500 transition w-6">
        <div className="w-6 l h-6 flex justify-center items-center">
          <ChatBoxSvg />
        </div>
      </button>
      <button className="hover:text-blue-500 transition ">
        <div className="w-6 l h-6 flex justify-center items-center">
          <VideoCamSvg />
        </div>
      </button>
    </div>
  );
};

export default DoctorCardButtons;
