import React, { useState } from "react";
import { serviceDropdown } from "../data/navItems";

const Services = () => {
  // left & right button
  const [right, setRight] = useState(true);
  const [left, setLeft] = useState(true);

  //   Slide Right function
  const slideRight = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 380;
  };

  //   Slide left function
  const slideLeft = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  //===================================================================================================================================
  // We will have a remove button logic as well when the space towards left or right is full remove that particular button
  // It will be applied to onScroll function on the main div
  //===================================================================================================================================
  const removeButton = (e) => {
    console.log(e.target.ScrollLeft, e.target.scrollWidth);
    if (e.target.scrollLeft == 0) {
      console.log("Hide Left Button");

      //setting the left to true as the condition passes
      setLeft(false);
      setRight(true); //right must be false when the left is true
    } else if (e.target.scrollLeft > 0) {
      setLeft(true);
      setRight(true);
    } else if (
      e.target.scrollLeft + e.target.clientWidth ===
      e.target.scrollWidth
    ) {
      console.log("Hide Right Button");

      //setting the right to true as the condition passes
      setRight(false);
      setLeft(true); // one value must be false so we can see only one button on the screen
    } else if (e.target.scrollLeft > 5980) {
      setRight(false);
      setLeft(true); // one value must be false so we can see only one button on the screen
    }
  };

  return (
    <div
      id='services'
      className='h-[500px]  w-full flex justify-center items-center bg-gradient-to-br from-indigo-300 to-blue-800 via-green-300'
    >
      {/* scroll cards  */}
      <div
        id='slider'
        className='w-full flex rounded-md overflow-hidden gap-5 overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide bg-white py-4 md:mx-28'
        // onScroll={removeButton}
      >
        {/* left arrow */}
        {left && (
          <button
            className='absolute w-[60px] h-[310px]  py-4  z-20 bg-white justify-center items-center left-13'
            onClick={slideLeft}
          >
            <img
              src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAV1BMVEX///8AAADDw8Pa2trc3NzY2NjFxcXBwcHS0tIREREMDAwuLi50dHTKysrk5OQ/Pz+FhYWqqqqzs7N+fn4sLCzy8vIbGxs0NDTr6+uRkZEnJyejo6O7u7tX4bY3AAACoElEQVR4nO2dWVJCQRAEZ1QUUFHccLv/Of1Qw4U378Noou2sygMYlVFNtw9cWvvnLG93q/X5xWV2jkOxueof3B1nZzkIp/0b2+w0B+Co/+AsO084vwR7v89OFMyeYL/OjhTLvmDv2ZlCOZ0Q7KR9OinYX7NjxTE1oqiDMRDkdDgS7JvsZEEMBR+ykwUxFKS8DMeCu+xoMZwNBftjdrYQxg32RXa2EKYPPUgQ36AFq2PB6liwOvg7OCPIeONiZkTxgowRdYPVmRE8yc4WgvKIMhrE30G8IH5ELVgdC1bHgtWZuYMWLAF+RP00UR03WB03WB38HcQL4kfUS6Y6brA6brA6+Dvot+6ro7xkLFgCC1bHd7A6yoKMEcUvGX+rVh03WB18g8p3kCGIH1EvmergG5z5LWw3WAI3WB0f+urgR9QNVgf/rhp+i7rB6igLekRL4Aar4warg29wQW+wremCT/ARbY3eYDuhN9hu4A22tp0WvMnOFQe/w+HrkKM4MuQo8u/huERMi0u+Iv7ZQuD50IoMrEjAG5WAtqIHtQz4H1SwIgNtRcpG1W5RQNGDWgYrErAiAYGNKvAwJaAoMKja68aKZbAiAYGNKnAXBRQFBtXrhoBbJOAWCWh/SkxRFBhUrxsCbpGAWyQgcBcFFAUG1euGgFsk4BYJCNxFAUWBQbUiASsS8OknIPBBuICiwKBqrxsBxUV2tiDcIgHtFgUUKYM68w9ArFgGKxKwIgEBRYG7OPPUT1GcaXGTnS2IseJzdrQoxoov2dGiGCquspOFMVSkvBLHiq/ZweIYKG6zcwUyfRdBfzJ8oEg5+u9MDWp2pmD2Fa+zI0Wzp3ifnSicX4pH2XkOwI91QzoVX2yuPv2eWXv0G8vb3Wp9fnH55y/wBp7lHvNgC82lAAAAAElFTkSuQmCC'
              className=':w-14 opacity-100 cursor-pointer hover:opacity-80'
              alt='left button'
            />
          </button>
        )}

        {serviceDropdown.map((item) => (
          <div
            key={item.id}
            className='mx-20 bg-gray-200  h-[300px] min-w-[190px] sm:min-w-[220px] rounded-lg cursor-pointer hover:scale-105 ease-in-out duration-300 shadow-lg flex flex-col justify-center items-center'
          >
            <img src={item.image} alt='services' className='w-[150px]' />
            <h1 className='text-lg font-bold pt-10'>{item.title}</h1>
          </div>
        ))}
        {/* right button  */}
        {right && (
          <button
            className='absolute w-[60px] h-[310px]  py-4  z-20 bg-white justify-center items-center sm:right-28 right-1 '
            onClick={slideRight}
          >
            <img
              src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8AAADm5uZOTk5SUlLp6elKSkpPT09ISEjw8PA7Ozu3t7dERET6+vrd3d2Pj48WFhYjIyNmZmakpKSCgoLDw8PLy8uenp5dXV1oaGgpKSlzc3M5OTlVVVUnJyfz8/M+Su2yAAACt0lEQVR4nO2cbVICMRBEs8iigHyDgIre/5b6R0tZNlZRoeK87ncAarp6Mp1slk3pWuaL4bJZrTfjq3/hfzMYNl9sa9dyE3bND1ZAG5+a37S1CyrNuDmHJnHdUdgMatdUlLYrEObi/pJClIuHiwpJLk4uKwS52KeQI/G+TyFG4rZXIUXi+Y4GKDGjECJxmpPICI0j38UR38VhTiLDxTu+RAEX+7c2lhgHgUbNjhuHRhAc/QQc/QQEclFAokCjOvoJOPoJOPoJCOSigESBRnX0ExCIfoFxk3WRIVHARYENnIBEgUZ1aBB4sIsABKJfIDQskYCARIHoF3BRIPoFXHT0ExBwUUCiQKM6NAg82kUA2bXIkCjgonORgIBEgVO/wKNigQ2cgIsODQKWSEBAokD0C7zmJxD9Ai4KjBuBDZyAiwIS1RvVoREERz8BgYkq4KJAaAhIFGjU7LhhfFQ75+Jz7eLKkHt2s6hdXBly42ZWu7gyZFyc1q6tEP3j5qV2aaXolTiqXVkpZn0KJ7UrKwXeQ/w6xM9SfB7m9jT72sWVAL8vxZ8t8OdD/BkfLxDfovjnpXgH8fcWeAfx94f4mMBPUQuMDv51aPyQwQc93kH8O8LaU5TgID4m8C2Kjwm8g/hPD+AdxK9BfEw46KODHzL4FsU7iI8JvINeg9HBX75oO0gQ6CETHQd9dPBrEH/54qCPDr5FPWSigw96vINeg9Fx0EfHLRod/Dvb+JjAO+g1GJ1sTBAcxOcgvkU9ZKLjoI+O12B0HPTRwbeoh0x0HPTR8RqMDt5BP7qPDr5F8UMGf0d/pDs4pTuY6A6mHd3BtIU7mItCiMD0ym7R1P9fc4qDKR3gDqa0hzuY0gDuYLq47SY5+EkLdzB1dzU4gWcSV4TPUHdoT98Ct7VruRXzxWnZvB0377UL+YMPTKMh4h+cUnEAAAAASUVORK5CYII='
              className='w-14 opacity-100 cursor-pointer hover:opacity-80'
              alt='right button'
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default Services;
