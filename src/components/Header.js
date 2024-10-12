import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header({ scrollToSection, homeRef, blogRef, contactRef, aboutRef, subscribeRef }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=""> 
      <nav className="flex items-center  justify-between p-4 lg:px-10 bg-gray-900 w-full font-sans md:px-20">
        <div className="flex items-center">
          <h1 className="text-white font-bold text-2xl">{` {Finsweet`}</h1>
        </div>
        <div className="hidden md:flex md:space-x-6 md:ml-auto text-white ">
          <ul className="flex space-x-6">
            <li onClick={() => scrollToSection(homeRef)} className="cursor-pointer">
              Home
            </li>
            <li onClick={() => scrollToSection(blogRef)} className="cursor-pointer">
              Blog
            </li>
            <li onClick={() => scrollToSection(contactRef)} className="cursor-pointer">
              Contact Us
            </li>
            <li onClick={() => scrollToSection(aboutRef)} className="cursor-pointer">
              About Us
            </li>
          </ul>
        </div>
        <div className="flex items-center space-x-3 pr-4">
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
          <div className="hidden lg:block">
            <button
              className="text-black bg-white p-2 px-6 font-bold hover:bg-slate-200 cursor-pointer"
              onClick={() => scrollToSection(subscribeRef)}
            >
              Subscribe
            </button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="flex flex-col absolute w-full bg-gray-900 text-white text-center space-y-4 py-4 md:hidden">
          <ul className="space-y-4">
            <li
              onClick={() => {
                scrollToSection(homeRef);
                setIsOpen(false);
              }}
              className="cursor-pointer"
            >
              Home
            </li>
            <li
              onClick={() => {
                scrollToSection(blogRef);
                setIsOpen(false);
              }}
              className="cursor-pointer"
            >
              Blog
            </li>
            <li
              onClick={() => {
                scrollToSection(contactRef);
                setIsOpen(false);
              }}
              className="cursor-pointer"
            >
              Contact Us
            </li>
            <li
              onClick={() => {
                scrollToSection(aboutRef);
                setIsOpen(false);
              }}
              className="cursor-pointer"
            >
              About Us
            </li>
          </ul>
          <div>
            <button
              className="text-black bg-white p-2 px-6 font-bold hover:bg-slate-200 cursor-pointer"
              onClick={() => {
                scrollToSection(subscribeRef);
                setIsOpen(false);
              }}
            >
              Subscribe
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
