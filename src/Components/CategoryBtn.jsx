import React from "react";

const CategoryBtn = ({ children, text }) => {
  return (
    <div className=" text-nowrap bg-black text-movieText top-0  font-bold  text-movie-green bg-grey1 border-2 border-movieText rounded-full px-4 py-1 z-100">
      {children}&nbsp;<span className="text-white">{text}</span>
    </div>
  );
};

export default CategoryBtn;
