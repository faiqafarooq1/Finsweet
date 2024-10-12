import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const authors = [
  {
    id: 1,
    name: "Floyd Miles",
    role: "Content Writer",
    company: "@Company",
    image: "/images/img-1.svg",
    color: "bg-card1",
  },
  {
    id: 2,
    name: "Dianne Russell",
    role: "Content Writer",
    company: "@Company",
    image: "/images/img-2.svg",
    color: "bg-card2",
  },
  {
    id: 3,
    name: "Jenny Wilson",
    role: "Content Writer",
    company: "@Company",
    image: "/images/img-3.svg",
    color: "bg-card1",
  },
  {
    id: 4,
    name: "Leslie Alexander",
    role: "Content Writer",
    company: "@Company",
    image: "/images/img-4.svg",
    color: "bg-card1",
  },
];

const AuthorCard = ({ author }) => {
  return (
    <div className={`${author.color} p-4 rounded-md shadow-lg text-center flex flex-col items-center justify-center lg:w-[296px] lg:h-[324px] gap-y-4 transition-transform duration-300 transform hover:scale-105`}>
      <img src={author.image} alt={author.name} className=" h-32 w-40 rounded" />
      <div className="flex flex-col items-center gap-y-2">

        <h3 className="text-[28px] font-bold tracking-[-1px] leading-10 ">{author.name}</h3>
        <div className="flex items-center text-sm leading-5 gap-x-2">
          <p className="text-gray-600 ">{author.role} </p>
          <p>{author.company}</p>
        </div>
      </div>
      <div className="flex justify-center space-x-2">
        <FaFacebookF className="text-gray-600 hover:text-blue-600" />
        <FaTwitter className="text-gray-600 hover:text-blue-400" />
        <FaInstagram className="text-gray-600 hover:text-pink-600" />
        <FaLinkedinIn className="text-gray-600 hover:text-blue-700" />
      </div>
    </div>
  );
};

const Cards = () => {
  return (
    <div className="">
      <h2 className="text-2xl font-bold text-center mb-8">List of Authors</h2>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-y-8 ">
        {authors.map((author) => (
          <AuthorCard key={author.id} author={author} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
