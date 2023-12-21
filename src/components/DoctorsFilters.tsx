import React from "react";

const DoctorsFilters = () => {
  const tags = [
    "Categoria1",
    "Categoria2",
    "Categoria3",
    "Categoria4",
    "Categoria5",
    "Categoria6",
  ];

  return (
    <div className="shadow-md bg-white">
      <h3 className="font-semibold text-lg p-2">Filtrar por especialidad</h3>
      <ul className="flex flex-wrap">
        {tags.map((tag) => (
          <li
            key={`tag_${tag}`}
            className="flex items-center justify-center border border-gray-100 w-1/2 h-12"
          >
            <label
              htmlFor={tag}
              className={`flex justify-center items-center text-center capitalize w-full h-full cursor-pointer`}
            >
              <input
                type="checkbox"
                hidden
                id={tag}
                value={tag}
                // onChange={(e) => {
                //   if (e.target.checked) {
                //     setState((prev: string[]) => [...prev, e.target.value]);
                //   } else {
                //     setState((prev: string[]) =>
                //       prev.filter((t) => t !== e.target.value)
                //     );
                //   }
                // }}
              />
              <span>{tag}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorsFilters;
