import React from "react";

const DoctorSearchInput = () => {
  return (
    <div className="w-full flex flex-col md:flex-row gap-2 my-2">
      <div className="flex flex-col w-full">
        <label htmlFor="name">Buscar por nombre</label>
        <input
          className="shadow-md p-2"
          id="name"
          type="text"
        />
      </div>
      <div className="flex flex-col w-full">
        <label htmlFor="type">Buscar por especialidad</label>
        <input
          className="shadow-md p-2"
          id="type"
          type="text"
        />
      </div>
    </div>
  );
};

export default DoctorSearchInput;
