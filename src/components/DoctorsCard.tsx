import Link from "next/link";
import React from "react";
import DoctorCardButtons from "./DoctorCardButtons";
import LocationSvg from "./icons/LocationSvg";
import StarSvg from "./icons/StarSvg";
import FilledStarSvg from "./icons/FilledStarSvg";

const user = {
  name: "Alejandra Tomasi",
  type: "pediatra",
  email: "email@email.com",
  image: "/profile.jpg",
  address: "Calle 123, Barrio, Buenos Aires",
  _id: "1",
  slug: "string",
};

const DoctorsCard = () => {
  return (
    <li
      key={user._id}
      className="shadow-md bg-white"
    >
      <div className="flex flex-col items-center gap-y-2 w-full">
        <Link
          href={`/usuarios/${user.slug}`}
          className=""
        >
          <div className="h-96 md:h-[280px] w-screen sm:max-w-sm md:w-[280px] overflow-hidden relative">
            {/* <Image
              alt={`foto de ${user.name}`}
              src={user.image}
              fill
              className="absolute object-cover"
            /> */}
            <div className="w-full h-full bg-gray-200"></div>
            <div className="flex items-center gap-2 absolute bottom-2 right-2">
              <p className="text-xs text-center leading-none bg-blue-300 px-2 py-1 rounded-md font-semibold">
                {user.type}
              </p>
            </div>
          </div>
        </Link>
        <Link href={`/usuarios/${user.slug}`}>
          <div className="flex flex-col items-center">
            <p className="text-lg font-medium">{user.name}</p>
            <div className="flex mb-2 gap-1 justify-center">
              {[...Array(4)].map((_, idx) => {
                return <FilledStarSvg key={idx} />;
              })}
              <StarSvg />
              <span className="text-xs">(10)</span>
            </div>
            <div className="flex items-center gap-1">
              <LocationSvg />
              <span className="text-sm text-gray-600">{user.address}</span>
            </div>
          </div>
        </Link>

        <DoctorCardButtons />
      </div>
    </li>
  );
};

export default DoctorsCard;
