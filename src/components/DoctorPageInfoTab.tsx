"use client";
import React, { useState } from "react";
import ClockSvg from "./icons/ClockSvg";
import PhoneSvg from "./icons/PhoneSvg";
import LocationSvg from "./icons/LocationSvg";

const DoctorPageInfoTab = () => {
  const [showNumber, setShowNumber] = useState<boolean>();

  return (
    <section className="p-4">
      <div className="shadow-md w-full p-4 mb-8">
        <h3 className="text-xl font-semibold mb-2">Información</h3>
        <div className="flex gap-2">
          <LocationSvg />
          <p>Calle 123, Belgrano, Buenos Aires</p>
        </div>
        <div className="flex gap-2">
          <ClockSvg />
          <p>Lunes a Viernes 08:00 - 18:00</p>
        </div>
        <div className="flex gap-2">
          <PhoneSvg />
          {showNumber && <p>11 1234 5678</p>}
          {!showNumber && (
            <button
              className="text-blue-500 font-semibold"
              onClick={() => {
                setShowNumber(true);
              }}
            >
              Mostrar número
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default DoctorPageInfoTab;
