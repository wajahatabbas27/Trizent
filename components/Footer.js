import React from "react";
import { serviceDropdown } from "../data/navItems";

const Footer = () => {
  // help array
  const help = [
    "Affiliate Marketers",
    "Agencies",
    "Company Blogs",
    "Content Marketers",
    "eCommerce Websites",
    "Email Marketers",
    "Online Publishers",
    "SEO Marketers",
  ];

  //   pricing array
  const pricing = [
    "Blog",
    "Writer Resources",
    "Client Help",
    "Frequently Asked Questions",
    "Videos",
    "Case Studies",
    "Ebooks",
    "Webinars",
  ];

  return (
    <main className='flex flex-col md:flex-row  justify-center items-center cursor-pointer bg-blue-100 md:px-60 py-10'>
      {/* services */}
      <div className='py-6 lg:py-0 lg:p-6  min-w-[200px]  flex flex-col  justify-center'>
        <h1 className=' text-xl underline font-semibold pb-3 '>
          Content Creation Services
        </h1>
        <ul className='space-y-1 '>
          {serviceDropdown.map((item) => (
            <li key={item} className='text-base hover:underline hover:font-medium'>
              {item.title}
            </li>
          ))}
        </ul>
      </div>
      {/* MAnaged services */}
      <div className='py-6 lg:py-0 lg:p-6  min-w-[200px]  flex flex-col  justify-center'>
        <h1 className='text-xl underline font-semibold pb-3 '>
          Managed Services
        </h1>
        <h1 className='text-xl underline font-semibold pb-3 '>Marketplace</h1>
        <ul className='space-y-1 '>
          <li className='text-base hover:underline hover:font-medium'>
            Our Approach to Quality
          </li>
          <li className='text-base hover:underline hover:font-medium'>
            Automate
          </li>
        </ul>
        <h1 className='text-xl underline font-semibold py-3 '>Who We Help</h1>
        <ul className='space-y-1 '>
          {help.map((item) => (
            <li key={item} className='text-base hover:underline hover:font-medium'>
              {item}
            </li>
          ))}
        </ul>
      </div>
      {/* Pricing */}
      <div className=' py-6 lg:py-0 lg:p-6  min-w-[200px]  flex flex-col  justify-center'>
        <h1 className='text-xl underline font-semibold pb-3 '>Pricing</h1>
        <h1 className='text-xl underline font-semibold py-3 '>Resources</h1>
        <ul className='space-y-1 '>
          {pricing.map((item) => (
            <li className='text-base hover:underline hover:font-medium'>
              {item}
            </li>
          ))}
        </ul>
      </div>
      {/* Hire Writers */}
      <div className='py-6 lg:py-0 lg:p-6  min-w-[200px]  flex flex-col  justify-center'>
        <h1 className='text-xl underline font-semibold pb-3 '>Hire Writers</h1>
        <h1 className='text-xl underline font-semibold py-3 '>Work With Us</h1>
        <ul className='space-y-1 '>
          <li className='text-base hover:underline hover:font-medium'>
            Content Writing
          </li>
          <li className='text-base hover:underline hover:font-medium'>
            Editing
          </li>
        </ul>
        <h1 className='text-xl underline font-semibold py-3 '>About Us</h1>
        <ul className='space-y-1 '>
          <li className='text-base hover:underline hover:font-medium'>Press</li>
          <li className='text-base hover:underline hover:font-medium'>Team </li>
          <li className='text-base hover:underline hover:font-medium'>
            Careers
          </li>
        </ul>
        <h1 className='text-xl underline font-semibold py-3 '>Contact Us</h1>
      </div>
    </main>
  );
};

export default Footer;
