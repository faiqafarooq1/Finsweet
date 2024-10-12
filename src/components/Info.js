import React from "react";
const categories = [
  {
    name: "Business",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: "./images/icon1.svg",
  },
  {
    name: "Startup",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: "./images/picture.svg",
  },
  {
    name: "Economy",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: "./images/economy.svg",
  },
  {
    name: "Technology",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: "./images/cyborg.svg",
  },
];

export default function Info() {
  return (
    <div  className="py-10">
      <div className="flex justify-end items-center">
        <div className="w-full lg:w-1/3 h-3 bg-light-yellow"></div>
        <div className="w-1/4 h-3 bg-purple-600"></div>
      </div>
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10  px-2 lg:px-12 bg-back">
          <div>
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-[3px]">
              About Us
            </h2>
            <h3 className="mt-2 text-xl lg:text-3xl font-bold text-gray-900 leading-snug">
              We are a community of <br className="hidden lg:block" /> content writers who share their
              learnings
            </h3>
            <p className="mt-4 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button
              className="mt-4 inline-block text-purple-600 font-semibold hover:underline"
            >
              Read More &gt;
            </button>
          </div>
          <div className="px-2">
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-[3px]">
              Our Mission
            </h2>
            <h3 className="mt-2 text-xl lg:text-3xl font-bold text-gray-900 leading-snug">
              Creating valuable content <br className="hidden lg:block" /> for creatives all around the world
            </h3>
            <p className="mt-4 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white ">
      <br/>
        <div className="text-center pb-8 ">
          <h1 className="lg:text-xl font-bold text-gray-900 md:text-sm">
          <br/>
            Choose A Category
          </h1>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6  ">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex flex-col gap-y-4  rounded-md p-7 hover:bg-light-yellow transition duration-300 bg-white border border-gray-300"
            >
            <div className="flex items-start">
                <img
                  src={category.icon}
                  className="w-12 h-12 rounded-[8px] p-2 bg-pink-100"
                  alt="icon"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900">{category.name}</h3>
              <p className=" text-gray-600 ">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
