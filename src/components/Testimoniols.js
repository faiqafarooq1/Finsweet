import React from 'react';
import { FaArrowRightLong,FaArrowLeftLong } from "react-icons/fa6";

const Testimonials = () => {
  return (
    <div  className="bg-white">
     <div className="py-8 flex flex-col lg:flex-row justify-between items-center gap-10">
    <span className="text-gray-500 text-center lg:text-left">
        We are <br className="hidden lg:flex" />
        <h2 className="font-bold text-2xl">Featured in</h2>
    </span>
    <div className="flex flex-wrap justify-center lg:justify-between gap-10 lg:gap-20">
        <img src="/images/logo1.svg" alt="logo1" className="h-6" />
        <img src="/images/logo2.svg" alt="logo2" className="h-6" />
        <img src="/images/logo3.svg" alt="logo3" className="h-6" />
        <img src="/images/logo4.svg" alt="logo4" className="h-6" />
        <img src="/images/logo5.svg" alt="logo5" className="h-6" />
    </div>
</div>


     <div className="bg-yellow-50 ">
     
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2  items-center py-10 ">
            <div className=' p-10 md:border-r border-gray-300 '>
            <h2 className="text-sm font-semibold text-text uppercase tracking-[3px] text-text1">Testimonials</h2>
            <br/>
            <h3 className="text-3xl font-bold text-text1">What people say<br className='hidden lg:block'/> about our blog</h3>
            <br/>
            <p className="text-gray-600 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
            </p>
        </div>

    <div className="flex flex-col justify-between p-10 ">
      <h4 className="text-2xl text-text1 font-bold">
        Lorem ipsum dolor sit amet,<br className='hidden lg:block'/> consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </h4>
      <div className="flex items-center mt-6">
        <img
          src="/images/picture.svg" 
          alt="Jonathan Vallem"
          className="h-12 w-12 rounded-full"
        />
        <div className="flex justify-between items-center w-full">
            <div className="flex-grow ml-4">
                <p className="font-bold text-text1">Jonathan Vallem</p>
                <p className="text-gray-500 text-sm">New York, USA</p>
            </div>
            <div className="flex space-x-4 ">
                <button className="p-2 bg-gray-300 text-white rounded-full hover:bg-black">
                    <FaArrowLeftLong />
                </button>
                <button className="p-2 bg-gray-300 text-white rounded-full hover:bg-black">
                    <FaArrowRightLong />
                </button>
            </div>
        </div>
    </div>
      
    </div>
  </div>
</div>
<div className=" flex items-center justify-center py-16 bg-white">
  <div className="text-center w-[414px]">
    <h2 className="text-3xl font-bold text-gray-900">Join our team to be a part of our story</h2>
    <p className="text-gray-600 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
    <button className="mt-8 px-6 py-3 bg-light-yellow text-white font-semibold  shadow-md hover:text-black transition duration-300">
      Join Now
    </button>
  </div>
</div>


    </div>
  );
};

export default Testimonials;
