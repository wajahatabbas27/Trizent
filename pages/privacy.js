import React from "react";
import Footer from "../components/Footer";

const privacy = () => {
  return (
    <>
      <div className=' bg-gradient-to-r from-[#EECFCD] via-pink-300 to-[#FFCACD] min-h-screen flex flex-col items-center justify-center pt-32'>
        <h1 className='text-3xl font-bold underline'>What we collect</h1>
        <h2 className='text-xl font-semibold p-6'>
          We may collect the following information:
        </h2>
        <ol className='text-lg font-normal px-2'>
          <li>- name and job title</li>
          <li>- contact information including email address</li>
          <li>
            - demographic information such as postcode, preferences and
            interests
          </li>
          <li>
            - other information relevant to customer surveys and/or offers
          </li>
        </ol>

        <h2 className='text-xl font-semibold p-6'>
          What we do with the information we gather:
        </h2>

        <h3 className='text-xl font-medium p-4'>
          We require this information to understand your needs and provide you
          with a better service, and in particular for the following reasons:
        </h3>
        <ul className='text-lg font-normal p-2'>
          <li>- Internal record keeping.</li>
          <li>
            - We may use the information to improve our products and services.
          </li>
          <li>
            - We may periodically send promotional emails about new products,
            special
          </li>
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default privacy;
