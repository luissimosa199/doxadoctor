import React from "react";

const DoctorPageHeader = () => {
  return (
    <div className="p-4 flex flex-col items-end bg-white md:flex-row">
      <div className="w-80 md:w-96 h-80 md:h-96 bg-gray-300 mx-auto md:mx-0 "></div>
      <div className="mx-auto md:ml-12">
        <h1 className="text-4xl font-semibold mb-2">Nombre Apellido</h1>
        <ul className="flex gap-2 text-sm justify-center md:justify-start">
          <li className=" px-2 py-1 font-semibold bg-blue-200 rounded-md">
            especialidad 1
          </li>
          <li className=" px-2 py-1 font-semibold bg-blue-200 rounded-md">
            especialidad 2
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DoctorPageHeader;
