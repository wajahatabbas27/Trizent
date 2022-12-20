import React, { useState } from "react";
import { serviceDropdown } from "../data/navItems";
import { Link } from "react-scroll";

const Dropdown = () => {
  return (
    <>
      <ul
        className='w-72 text-white bg-blue-600  flex flex-col justify-center items-center absolute list-none top-[94px]   right-52 z-20 '
        // onClick={() => setDropdown(!dropdown)}
      >
        {serviceDropdown.map((item) => (
          <li
            key={item.id}
            className='w-full flex items-center justify-center p-2 hover:bg-blue-300 border border-black cursor-pointer '
          >
            <Link to={item.path}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Dropdown;
