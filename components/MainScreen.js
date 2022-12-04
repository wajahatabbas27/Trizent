import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const Home = () => {
  const [text] = useTypewriter({
    words: [
      `Hi, Writing Environment Created, Come On!`,
      "your success is our business!",
      "CONTENT IS KING AND WE ARE KING MAKERS",
    ],
    loop: true,
    delaySpeed: 1800,
  });

  return (
    <div
      id='home'
      className='bg-gradient-to-t from-indigo-200 to-blue-800 h-screen w-full  pt-32 xs:pt-0 pb-18 xs:pb-0 mb-0  '
    >
      {/* Container */}
      <div className='max-w-[1000px] h-full mx-auto px-8 flex flex-col justify-center '>
        <motion.p
          initial={{ y: -500, opacity: 0.5, scale: 0.5 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2.5 }}
          className='text-black'
        >
          A better way to get work done
        </motion.p>
        <h1 className='text-4xl sm:text-5xl font-bold text-black nameBackground '>
          "CONTENT IS KEY TO SUCCESS!"
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-black skillBackground sm:overflow-x-hidden overflow-y-hidden'>
          {text}
          <Cursor cursorColor='#FF1493' />
        </h2>
        <p className='text-black py-4 max-w-[700px]'>
          I'm a full-stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I'm focused on
          building responsive full-stack web applications.
        </p>
        <div>
          <motion.button
            initial={{ x: -500, opacity: 0 }}
            animate={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className='group text-black  border-2 border-black px-6 py-3 my-2 flex items-center hover:bg-blue-600 hover:border-blue-600'
          >
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight size={20} className='ml-3' />
            </span>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Home;
