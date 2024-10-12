import React from "react";

export default function AboutUs() {
  return (
    <div  className="lg:relative flex flex-col lg:flex-row items-start py-10">
      <div className="flex justify-center lg:w-3/5 ">
        <img
          src="/images/grouppic.svg"
          alt="bg-img"
          className="h-auto max-w-full lg:h-[540px] lg:w-auto"
        />
      </div>
      <div className="lg:absolute z-10 right-8 top-22 lg:h-[480px] w-full pt-10 lg:p-12 bg-white sm:p-10 lg:w-1/2 lg:max-w-full lg:top-1/4">
        <h4 className="text-xs sm:text-sm font-medium text-neutral-500 mb-2 tracking-[3px]">
          WHY WE STARTED
        </h4>
        <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-neutral-900 leading-tight mb-4">
          It started out as a simple
          <br className='hidden lg:block'/> idea and evolved into <br className='hidden lg:block'/> our passion
        </h2>
        <p className="text-[8px] sm:text-base lg:text-[16px] text-neutral-600 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip.
        </p>
        <div className=" flex items-center ">
        <button className="bg-light-yellow text-neutral-900 font-bold py-2 sm:py-3 px-4 text-xs sm:text-sm lg:text-base rounded  sm:w-52 hover:text-white transition duration-300">
          Discover our story &gt;
        </button>
        </div>
      </div>
    </div>
  );
}
