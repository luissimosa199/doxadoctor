"use client";

import React, { useState } from "react";
import BarsSvg from "./icons/BarsSvg";
import Link from "next/link";

const MobileNav = () => {
  const [menuIsOpen, toggleMenu] = useState<boolean>(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => {
          toggleMenu(!menuIsOpen);
        }}
      >
        <BarsSvg />
      </button>
      {menuIsOpen && (
        <div className="absolute w-full left-0 top-16 bg-white shadow-md">
          <ul className="flex flex-col items-center">
            <li className="border-b w-1/2 text-center py-2">
              <Link href="#">Profesionales</Link>
            </li>
            <li className="border-b w-1/2 text-center py-2">
              <Link href="#">Notas</Link>
            </li>
            <li className="border-b w-1/2 text-center py-2">
              <Link href="#">Agregar Profesional</Link>
            </li>
            <li className="border-b w-1/2 text-center py-2">
              <Link href="#">Ingresar</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
