import React, { useState } from "react";
import { Link } from "react-scroll";
// import { FaBars, FaTimes, FaTree } from "react-icons/fa";
import { navItems } from "../data/navItems";
import SignUpButton from "./SignUpButton";
import Dropdown from "./Dropdown";
import {
  FaBars,
  FaTimes,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaTree,
  FaFacebook,
} from "react-icons/fa";
// import { HiOutlineMail } from "react-icons/hi";



const Navbar = () => {
  // dropdown show on click
  const [dropdown, setDropdown] = useState(false);

  // responsive screens
  const [nav, setNav] = useState(false);
  //setting it to false when ever the button is called to show the cross button
  const handleclick = () => setNav(!nav);

  return (
    <nav className='fixed w-full h-[100px] flex px-2 md:px-12 justify-between items-center z-30 bg-blue-200 text-black'>
      <div className='flex w-48 items-center justify-between'>
        <Link to='home'>
          <h1 className='cursor-pointer text-4xl'>TRIZENT</h1>
        </Link>
        <FaTree className='text-4xl' />
      </div>
      <div className='hidden lg:flex space-x-6 items-center justify-center text-center '>
        <ul className='flex space-x-6 text-center justify-center  items-center h-[13vh] '>
          {navItems.map((item) => {
            // // if services are there so render
            // if (item.title === "Services") {
            //   return (
            //     <li
            //       className=' text-xl cursor-pointer hover:text-black h-full flex items-center '
            //       key={item.id}
            //       onMouseEnter={() => setDropdown(true)}
            //       onMouseLeave={() => setDropdown(false)}
            //     >
            //       <Link to={item.path}>{item.title}</Link>
            //       {dropdown && <Dropdown />}
            //     </li>
            //   );
            // }

            // // returning list items for everything here!
            return (
              <li
                className=' text-xl cursor-pointer hover:underline'
                key={item.id}
              >
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* responsive bars icon button for smaller screens like mobile */}
      <div onClick={handleclick} className='lg:hidden z-10'>
        {!nav ? <FaBars size={30} /> : <FaTimes size={30} />}
      </div>

      {/* mobile menu */}
      {/* absolute bg-[#0a192f] top-0 left-0 w-full h-screen flex flex-col justify-center items-center */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute bg-gradient-to-r from-blue-800 to-indigo-200 text-black top-0 left-0 w-full h-screen flex flex-col justify-center items-center cursor-pointer hover:text-black"
        }
      >
        <li className='py-6 text-4xl'>
          <Link onClick={handleclick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link
            onClick={handleclick}
            to='services'
            smooth={true}
            duration={500}
          >
            Services
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleclick} to='team' smooth={true} duration={500}>
            Team
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleclick} to='work' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        {/* <li className='py-6 text-4xl'>
          <Link onClick={handleclick} to='contact' smooth={true} duration={500}>
            <SignUpButton />
          </Link>
        </li> */}
      </ul>

      {/* social icons are hidden will only show up when the screen greater than large */}
      <div className='hidden lg:flex flex-col fixed left-0 top-[35%]'>
        <ul>
          <li className='w-[160px] h-[60px] flex items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 p-4'>
            <a
              href='http://linkedin.com/in/trizent-studio-b4842925b'
              target='_blank'
              rel='noreferrer'
              className='flex items-center w-full justify-between text-gray-300'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] p-4 h-[60px] flex items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#00acee]'>
            <a
              href='https://twitter.com/ContentGuru5'
              target='_blank'
              rel='noreferrer'
              className='flex items-center w-full justify-between text-gray-300'
            >
              Twitter <FaTwitter size={30} />
            </a>
          </li>
          <li className='w-[160px] p-4 h-[60px] flex items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#3b5998]'>
            <a
              href='https://web.facebook.com/profile.php?id=100089158297541'
              target='_blank'
              rel='noreferrer'
              className='flex items-center w-full justify-between text-gray-300'
            >
              Facebook <FaFacebook size={30} />
            </a>
          </li>
          <li className='w-[160px] p-4 h-[60px] flex items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gradient-to-b from-[#405DE6] to-[#F77737] via-[#C13584]'>
            <a
              href='https://www.instagram.com/trizentstudio/'
              target='_blank'
              rel='noreferrer'
              className='flex items-center w-full justify-between text-gray-300'
            >
              Instagram <FaInstagram size={30} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
