import React from 'react'

export default function Hero() {
  return (
    <div className='p-8 lg:p-20 bg-cover bg-no-repeat' style={{backgroundImage:"url('/images/hero-bg.svg')"}}>
    <h3 className=' text-white  text-sm/[16px] leading-[20px] tracking-[3px]'>POSTED ON <span className=' font-bold '>STARTUP</span></h3>
    <h1 className='font-bold lg:leading-[64px] text-white text-3xl lg:text-[56px] lg:tracking-[-2px] '>Step-by-step guide to choosing <br/> great font pairs</h1>
    <br/>
    <p className='text-white text-sm/[16px] leading-[28px] font-normal'>By <span className=' text-light-yellow'>James West   </span>|  May 23, 2022</p>
    <p className='text-white text-sm/[16px] leading-[28px] font-normal'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu <br/> fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
    <br/><br/>
    <button className='w-[205px] h-[56px] top-[552px] left-[80px] py-[16px] px-[48px] gap-[12px] bg-amber-300 text-[18px] font-bold leading-[24px] text-left hover:text-white transition duration-300'>{`Read More>`}</button> 
    </div>
  )
}
