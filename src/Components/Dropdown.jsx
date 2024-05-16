import React, { useState } from "react";

import { filterIcon } from "../assets";

const Dropdown = ({ items, buttonLabel }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <div>
      <button
        className="inline-flex  items-center bg-movieText   gap-2 md:gap-6 rounded-full bg-movie-green  px-2 md:px-6 py-1 font-bold "
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedItem ? selectedItem : buttonLabel}
        <img src={filterIcon} className="w-[25px] mt-1 fs h-[25px]" alt="" />
      </button>
      {isOpen && (
        <div className="absolute z-10 mt-1 w-40 bg-white shadow-lg rounded-md">
          {items.map((item) => (
            <button
              key={item}
              onClick={() => handleItemClick(item)}
              className="block w-full px-4 py-2 text-gray-800 hover:bg-gray-200 focus:outline-none"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
