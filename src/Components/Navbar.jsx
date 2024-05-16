import React, { useState } from "react";
import { navLinks } from "../Constants";
import { Button } from "./index";
import { close, menu } from "../assets";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <nav className={`w-full  flex justify-between relative z-50`}>
        <h1 className="text-movieText text-2xl ">Logo</h1>
        <div className="flex   gap-5">
          <ul className="list-none md:flex hidden justify-center items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  active === nav.title ? "text-movieText" : "text-white"
                } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
                onClick={() => setActive(nav.title)}
              >
                <Link to={nav.to}>{nav.title}</Link>
              </li>
            ))}
          </ul>
          <div className="lg:flex gap-5 hidden">
            <Button children={"SignUp"} className={" border px-6 py-1"} />
            <Button children={"LogIn"} className={" bg-movieText px-8 py-1"} />
            <Button children={"Connect"} className={" border px-6 py-1"} />
          </div>
        </div>

        <div className="lg:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex flex-col gap-10"
            } p-20 bg-black-gradient absolute top-20 right-0 mx-4 bg-movieText my-2 min-w-[140px] rounded-xl sidebar`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-dimWhite"
                  } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                  onClick={() => setActive(nav.title)}
                >
                  <Link to={nav.to}>{nav.title}</Link>
                </li>
              ))}
            </ul>

            <div className="flex   flex-col gap-5">
              <Button children={"SignUp"} className={" border px-6 py-1"} />
              <Button children={"LogIn"} className={"bg-movieText px-8 py-1"} />
              <Button children={"Connect"} className={" border px-6 py-1"} />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
