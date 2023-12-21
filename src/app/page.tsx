import DoctorSearchInput from "@/components/DoctorSearchInput";
import DoctorsCard from "@/components/DoctorsCard";
import DoctorsFilters from "@/components/DoctorsFilters";
import React from "react";

export default function Home() {
  return (
    <main className="md:p-8 bg-zinc-50">
      <div className="max-w-4xl mx-auto">
        {/* <div className="w-full bg-gray-300 h-48 mb-4"></div> */}

        <DoctorsFilters />
        <DoctorSearchInput />
      </div>

      <div className="w-full h-36 mt-4 bg-gray-300"></div>

      <ul className="flex flex-wrap gap-8 justify-around w-full mt-4">
        {[...Array(14)].map((e, idx: number) => {
          if (idx === 7) {
            return (
              <React.Fragment key={`ad_${idx}`}>
                <li className="shadow-md bg-gray-300">
                  <div className="h-96 md:h-[280px] w-screen sm:max-w-sm md:w-[280px]"></div>
                </li>
                <DoctorsCard />
              </React.Fragment>
            );
          }

          return <DoctorsCard key={idx} />;
        })}
      </ul>
    </main>
  );
}
