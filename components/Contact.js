import React from "react";

const Contact = () => {

  return (
    <div
      id='contact'
      className='w-full overflow-x-hidden bg-gradient-to-r from-[#EECFCD] via-pink-300 to-[#FFCACD] flex justify-center items-center  p-4 pt-28 xs:pt-0  mb-0'
    >
      <form
        action='https://getform.io/f/79fcfd7a-241d-4420-8f06-1711bf3ea54c'
        method='POST'
        className='flex flex-col max-w-[600px] w-full'
      >
        <div className='pb-8'>
          <p className='text-4xl inline font-bold border-b-4 border-pink-600 text-black'>
            Contact
          </p>
          <p className='text-black py-4'>
             Submit the form below or shoot me an email -
            trizentstudio@gmail.com to start working.
          </p>
        </div>
        <input
          type='text'
          placeholder='Name'
          name='name'
          className='bg-white p-2 focus:outline-0'
        />
        <input
          type='email'
          placeholder='Email'
          name='email'
          className='my-4 p-2 bg-white focus:outline-0'
        />
        <input
          type='number'
          placeholder='Phone'
          name='phone'
          className='mb-4 p-2 bg-white focus:outline-0'
        />
        <textarea
          name='message'
          placeholder='Message'
          rows={10}
          className='bg-white p-2 focus:outline-0'
        />
        <button className='text-black border-2 border-black my-8 px-4 py-3 mx-auto flex items-center hover:bg-[#EECFCD] hover:border-black '>
          Order Now
        </button>
      </form>
    </div>
  );
};

export default Contact;
