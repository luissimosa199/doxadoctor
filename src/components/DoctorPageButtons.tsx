import { Tabs } from "@/types";
import React from "react";

const DoctorPageButtons = ({
  setCurrentTab,
  currentTab,
}: {
  setCurrentTab: React.Dispatch<React.SetStateAction<Tabs>>;
  currentTab: Tabs;
}) => {
  return (
    <div className="mx-4 flex flex-col-reverse justify-center md:justify-between md:flex-row">
      <ul className="flex text-lg justify-around md:justify-left">
        <li>
          <button
            onClick={() => {
              setCurrentTab("informacion");
            }}
            className={`${
              currentTab !== "informacion" ? "" : "border-b-2 border-blue-600"
            } px-4 py-2 text-blue-600 font-semibold`}
          >
            Información
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              setCurrentTab("opiniones");
            }}
            className={`${
              currentTab !== "opiniones" ? "" : "border-b-2 border-blue-600"
            } px-4 py-2 text-blue-600 font-semibold`}
          >
            Opiniones
          </button>
        </li>
      </ul>
      <ul className="flex gap-4 justify-center md:justify-end items-center">
        <li>
          <button className="bg-blue-300 shadow-sm px-2 py-1 rounded-md">
            Comenta
          </button>
        </li>
        <li>
          <button className="bg-blue-300 shadow-sm px-2 py-1 rounded-md">
            Ver teléfono
          </button>
        </li>
        <li>
          <button className="bg-blue-300 shadow-sm px-2 py-1 rounded-md">
            Solicitar turno
          </button>
        </li>
      </ul>
    </div>
  );
};

export default DoctorPageButtons;
