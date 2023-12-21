import DoctorPageBody from "@/components/DoctorPageBody";
import DoctorPageHeader from "@/components/DoctorPageHeader";
import React from "react";

const Page = () => {
  return (
    <main className="bg-zinc-50">
      <DoctorPageHeader />
      <DoctorPageBody visiblePhone={true} />
    </main>
  );
};

export default Page;
