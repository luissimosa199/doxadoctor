import DoctorPageBody from "@/components/DoctorPageBody";
import DoctorPageHeader from "@/components/DoctorPageHeader";
import React from "react";

const Doctor = () => {
  return (
    <main className="bg-zinc-50">
      <DoctorPageHeader />
      <DoctorPageBody />
    </main>
  );
};

export default Doctor;
