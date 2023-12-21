import Image from "next/image";
import React from "react";

const DoctorPageHeader = () => {
  return (
    <div className="pb-2 md:p-4 flex flex-col items-end bg-white md:flex-row">
      <div className="relative mx-auto md:mx-0">
        <div className="w-screen md:w-96 h-[400px] md:h-96 bg-gray-300 mb-2 overflow-hidden z-0 ">
          <Image
            src="/profile.jpg"
            alt="profile picture"
            className="object-cover object-center "
            fill
            // width={320}
            // height={320}
          />
        </div>
        <div className="absolute top-0 w-full h-full bg-gradient-to-t from-black via-transparent z-10"></div>
        <div className="absolute bottom-4 left-4 z-20">
          <h1 className="text-5xl font-semibold text-white mb-2">
            Nombre <br /> Apellido
          </h1>
          <ul className="flex gap-2 text-sm justify-center md:justify-start ">
            <li className=" px-2 py-1 font-semibold bg-blue-200 rounded-md">
              especialidad 1
            </li>
            <li className=" px-2 py-1 font-semibold bg-blue-200 rounded-md">
              especialidad 2
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto md:ml-12"></div>
    </div>
  );
};

export default DoctorPageHeader;
