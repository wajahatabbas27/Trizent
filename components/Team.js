import React from "react";

const Team = () => {
  return (
    <main
      id='team'
      className=' bg-blue-200  grid grid-col-1 md:grid-cols-2 justify-center items-center md:px-20 md:py-20 space-y-4 md:space-y-0 md:space-x-4'
    >
      {/* team heading/descriptions   */}
      <div className='bg-gray-100 rounded-lg p-6'>
        <h1 className='text-4xl font-bold underline py-4'>Our Team</h1>
        <p className='text-lg'>
          We are equipped with quality content writers who are experts in their
          respective fields. They are able to produce original, high-quality
          content that is both informative and engaging. We have collected
          experienced grus form all walks of backgrounds. Be it copywriting,
          social media marketing, website content, blogs, or search engine
          optimization, they are able to take your business from nowhere to
          everywhere. In addition, we write research articles, theses,
          dissertations, and other assessments on almost all subjects on demand.
          This not only helps students pass their examinations but also helps
          them secure good grades. Additionally, our team is able to work
          quickly and efficiently to meet deadlines. Our writers are special
          because they know how to drive business to your website or online
          store. Quality content that is tailored to the needs of the time is
          the key to success. Given the fact that in this age of information
          explosion, getting relevant information is very difficult for every
          online user, our team is always willing to go above and beyond to
          research a topic and make sure that the information they are providing
          is accurate, up-to-date, and represents your business well. You are
          just a few clicks away. Just drop an order. We will transform your
          potential clients into permanent customers.
        </p>
      </div>
      {/* picture for team */}
      <div className=' flex items-center justify-center px-4 '>
        <img
          src='https://static.startuptalky.com/2022/02/Effectively-divide-work-in-Team-StartupTalky.jpg'
          alt='team'
        />
      </div>
    </main>
  );
};

export default Team;
