import React, { useState } from "react";
import { Modal } from "@mui/material";
import { Link } from "react-scroll";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();

  return (
    <main className='flex w-full h-[200px] flex-col md:flex-row  justify-center items-center cursor-pointer bg-blue-100 md:px-60 py-10'>
      <ul className='flex flex-col space-x-0 space-y-4 md:space-y-0 md:flex-row  md:space-x-20 text-lg font-base items-center justify-center '>
        <li
          className=' hover:font-bold hover:underline'
          onClick={() => {
            router.push("privacy");
          }}
        >
          Privacy
        </li>
        <li
          className=' hover:font-bold hover:underline'
          onClick={() => {
            router.push("terms");
          }}
        >
          Terms and Condition
        </li>
        <li className=' hover:font-bold hover:underline'>Tecno Treasure LLC</li>
      </ul>
    </main>
  );
};

export default Footer;
