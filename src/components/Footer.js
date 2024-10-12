import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
const Footer = ({contactRef , aboutRef , scrollToSection, homeRef, blogRef}) => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className=" flex flex-col gap-y-5 p-5 lg:px-10">
        <div className="flex flex-col lg:flex-row justify-between lg:items-center">
          <h1 className="text-[26px]  font-bold text-white">{`{Finsweet`}</h1>
          <div className="grid grid-cols-2 lg:flex lg:gap-x-8 lg:text-sm">
            <ul className="flex space-x-6 ">
              <li
                onClick={() => scrollToSection(homeRef)}
                className="cursor-pointer"
              >
                Home
              </li>
              <li
                onClick={() => scrollToSection(blogRef)}
                className="cursor-pointer"
              >
                Blog
              </li>
              <li
                onClick={() => scrollToSection(contactRef)}
                className="cursor-pointer"
              >
                Contact Us
              </li>
              <li
                onClick={() => scrollToSection(aboutRef)}
                className="cursor-pointer"
              >
                About Us
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row  items-center gap-y-4 lg:gap-y-0 lg:gap-x-28 p-4 lg:p-10 lg:pl-20  bg-footer">
          <div>
            <h1 className="text-white text-xl lg:text-[36px] font-bold lg:leading-[48px]">
              Subscribe to our newsletter to get{" "}
              <br className="hidden lg:block" /> the latest updates and news
            </h1>
          </div>
          <div>
            <div className="flex items-center lg:gap-x-7">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="px-4 py-2 text-black bg-transparent border-[1px] border-gray-600"
              />
              <button className="bg-light-yellow text-black font-semibold p-2  lg:px-6 py-2 hover:text-white transition duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <div className="text-sm">
              <p>Finstreet 118 2561 Fintown</p>
              <p>hello@finsweet.com 020 7993 2905</p>
            </div>
          </div>

          <div className="flex space-x-4">
            <div className="hover:text-white">
              <FaFacebookF className="text-gray-600 hover:text-blue-600" />
            </div>
            <div className="hover:text-white">
              <FaTwitter className="text-gray-600 hover:text-blue-400" />
            </div>
            <div className="hover:text-white">
              <FaInstagram className="text-gray-600 hover:text-pink-600" />
            </div>
            <div className="hover:text-white">
              <FaLinkedinIn className="text-gray-600 hover:text-blue-700" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
