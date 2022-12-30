import React from "react";

const Footer = () => {
  return (
    <main className='flex h-[200px] flex-col md:flex-row  justify-center items-center cursor-pointer bg-blue-100 md:px-60 py-10'>
      <ul className='flex md:flex-row space-x-20 text-lg font-base '>
        <li className=' hover:font-bold hover:underline'>trizent</li>
        <li className=' hover:font-bold hover:underline'>terms</li>
        <li className=' hover:font-bold hover:underline'>condition</li>
        <li className=' hover:font-bold hover:underline'>LLC</li>
      </ul>
    </main>
  );
};

export default Footer;
