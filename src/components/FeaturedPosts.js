import React from 'react';
const posts = [
  { id: 1, title: '8 Figma design systems that you can download for free today.', date: 'Aug 23, 2021', author: 'John Doe' },
  { id: 2, title: '8 Figma design systems that you can download for free today.', date: 'Aug 24, 2021', author: 'John Doe' },
  { id: 3, title: '8 Figma design systems that you can download for free today.', date: 'Aug 25, 2021', author: 'John Doe' },
  { id: 4, title: '8 Figma design systems that you can download for free today.', date: 'Aug 26, 2021', author: 'John Doe' },
];

export default function FeaturedPosts() {
  return (
    <div  className="flex flex-col lg:flex-row gap-10 w-full pt-10">
      <div className="w-full lg:w-2/3">
        <h2 className="text-lg lg:text-2xl lg:text-[36px] font-bold leading-[30px] lg:leading-[48px] tracking-[-1px] lg:tracking-[-2px] text-left text-neutral-800">
          Featured Post
        </h2>
        <br />
        <div className="w-full p-6 lg:p-10 border border-[#6D6E76] border-opacity-10 rounded-lg">
          <img
            src="/images/featuredpost.svg"
            alt="Featured Post"
            className="w-full h-auto rounded-md"
          />

          <div className="text-neutral-800">
            <p className="text-black text-sm leading-[20px]">
              By <span className="text-blue-500">John Doe</span> | May 23, 2022
            </p>
            <br />
            <h2 className="text-xl lg:text-[28px] font-bold leading-[32px] lg:leading-[40px] tracking-[-1px] text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
            </h2>
            <br />
            <p className="text-sm lg:text-[16px] leading-[24px] lg:leading-[28px] text-left">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
            <br />
            <button className="w-full lg:w-[205px] h-[48px] lg:h-[56px] py-[16px] px-[24px] lg:px-[48px] gap-[12px] bg-light-yellow text-sm lg:text-[18px] font-bold leading-[20px] lg:leading-[24px] text-center hover:text-white transition duration-300">
              Read More&gt;
            </button>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/3  text-neutral-800 ">
      <div className="flex items-center justify-between">
        <h2 className="text-lg lg:text-2xl lg:text-[36px] font-bold leading-[32px] lg:leading-[48px] tracking-[-1px] lg:tracking-[-2px] text-left">
          All Posts
        </h2>
        <button className="text-blue-500 hover:underline">View All</button>
      </div>
        <br />
        <div className="space-y-6 lg:pl-5 ">
          {posts.map(post => (
            <div key={post.id} className="bg-white p-5  hover:bg-pink-100">
              <p className="text-[14px] font-medium leading-[20px] text-left">
                By <span className="text-purple-800">{post.author}</span> | {post.date}
              </p>
              <h4 className="mt-2 text-lg lg:text-[24px] font-bold leading-[28px] lg:leading-[32px] text-left">
                {post.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
