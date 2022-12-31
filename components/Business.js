import React from "react";
import { Link } from "react-scroll";

const Business = () => {
  const icons = [
    {
      heading: "Agencies",
      description:
        "Find writers with knowledge in the specific industries you need to produce compelling content for your varied client base.",
      image:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEX///8AAAClpaVhYWHc3Nz09PSGhobCwsIwMDD4+PiCgoK9vb18fHwPDw/7+/skJCTj4+OQkJBUVFSrq6u3t7fGxsYbGxtmZmbq6uo/Pz+xsbFubm7f398xMTGcnJzW1tZHR0dcXFwpKSkYGBhNTU04ODiMjIzHYsq2AAADc0lEQVR4nO3d21biMBhAYTkUhHIohwKjSJVR3/8RxwtrYwolfwmTA3tfzSorWfm8mNBCy8MDERERERERERERedju0L1RqWvad/3OrXpzTfvudsKea9p3CBEidB9ChAjdpwq3vav747fQwnSr6IVdhP8/hMIQOgihMIQOQigMoYMQCkPooPsWztJhWTpThvwcHfb1IYEJE+W1pDo8ro6O9SFxCAfV0YE+BKGDECLUQugghAi1EDoIIUIthA5CiFALoYMQ3qVwUh2d6EMCEz4kVcrRUXV0pI8ITSgPoYMQCkPoIITCEDoIobDAhKPJoGyivD9bj8uj47U+JDAhnwFHe/aE8G6E29su3LjbCVuHECFChAgRIkSI8D8Kl1nfuH0aolB0brGPXmj5cpHp1AgjEE4fy6aKcDEvj84X+hAPhZndqX0T7p6eO/EKk/Vk3vmdhVl9ESbD8bFTz8LMPghH+efHCV0kwlmxeD2ji0FYHN4bdKELi+7ygi5k4b7bM9CFKsxW26khL0Chtp1HJkzS2nbeQmj5fWm+KccdX68SJunJ7fxM6h+iNpPymoVzi2H12rG1cJQPXsx10+d10nRyfTvhYyvhKF8oT0u72PYpuzS1T8JZcWh6s6L31u2bTO2NsDiYbOdly0NhOrUXwn73TaB7XRTmU3sgzFY9wXb+8pnXvpXtszATbecv4+EpnbfCXf3svKHpJN2d0fkqFGznf5+fmnS+Ck1521V2QReyUNnwIhS+H2pbQkTCrw3v3H+aEQg/PvOZPjAe4WY8TPRB8QiPk7SlLgjh5Q0vbGF+nS4A4T56oem2blfY9rv6inDuidDy/Rb9n3GD2jU6R8IWWbleilAWQmEIjZaBUBZCYQiNlnHfQuVhJMr5/uz0M0rqUzdMpxxt+2wT42U0CZWr/MpPSCpfMZ5KhJafT2O8jCbhY/XasDra9mMtH8+eECJEiBAhQoQIESJEiBAhQoQIwxBuqtdOX4naWBC2/QzYeBlNwrz6oTTlOxq76vfTat9taBJa/t0142U0CeWFdkVYHkJhCI2WgVAWQmEIjZaBUBZCYQiNloFQFkJhtoUmt25dyPJTlFbVbKInJf9ahvLvZe/q1FuIt9dPp9xNPpdMpy7D+O68YEMYfgjDD2H4IQy/OxB2Y8/C22MiIiIiIiIiIiL66h/GP2BHIdUFtwAAAABJRU5ErkJggg==",
    },
    {
      heading: "eCommerce Companies",
      description:
        "Combine powerful tools for creating and managing product copy with skilled eCommerce writers to drive traffic and sales.",
      image:
        "data:image/png;base64,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",
    },
    {
      heading: "Publishers",
      description:
        "Build teams of knowledgeable writers and specify unique content formats for each of your properties – and then publish instantly to your sites.",
      image:
        "data:image/png;base64,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",
    },
    {
      heading: "Brands",
      description:
        "Partner with us to get publish-ready, on-brand content at any scale using our fully managed services.",
      image:
        "data:image/png;base64,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",
    },
  ];

  return (
    <div  className='px-10 py-44 lg:flex bg-blue-200 space-x-8'>
      {/* Build business heading */}
      <div className='lg:w-[1000px] flex flex-col items-center space-y-10 lg:pl-20'>
        <h1 className='text-4xl font-bold'>Develop your business with us.</h1>
        <p className=' text-xl tracking-wide'>
          There is no better place to build your business than with us if you
          are looking to do so. We are committed to supporting your success and
          offer the expertise, tools, and resources needed. We will collaborate
          with you to create a special strategy that satisfies your requirements
          and advances your objectives. We are here to support you as you expand
          your company/business and realise your full potential. To begin, get
          in touch with us.
        </p>
        <button className='w-32 flex justify-center border-2 border-black mt-10 p-3 text-lg rounded-md hover:bg-blue-700 hover:border-blue-700 text-black active:outline-none active:transform active:scale-95 '>
          <Link to='contact'>Order Now</Link>
        </button>
      </div>
      {/* icons  */}
      <div className='flex flex-wrap justify-center items-center  md:justify-evenly mt-24 lg:mt-0 cursor-pointer '>
        {icons.map((icon, i) => (
          <div
            key={i}
            className='flex flex-col bg-white  md:w-[300px] md:h-[400px] mb-4 rounded-lg shadow-lg  items-center hover:transition-transform hover:scale-105'
          >
            <img
              src={icon.image}
              alt={icon.description}
              className='w-[150px] my-4 '
            />
            <h1 className='text-2xl font-semibold my-5'>{icon.heading}</h1>
            <p className='text-lg tracking-wide mx-2'>{icon.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Business;
