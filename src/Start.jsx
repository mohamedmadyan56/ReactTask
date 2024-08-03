import React from 'react'
import img1 from './assets/avataaars.svg'
export default function Start() {
  return (
    <>
    <div className='bg-[#1ABC9C] flex flex-col justify-center items-center  min-h-screen py-5'>
    <img className='w-[200px]' src={img1} alt="imgp-ersone" />
    <h1 className='text-5xl text-white font-bold mt-7'>START FRAMEWORK</h1>
<div className="flex justify-center text-center items-center flex-row gap-4">
<span className='w-20 h-1 bg-white mt-5'></span>
  <svg className="w-[25px] h-[25px] text-white mt-5 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/>
</svg>
<span className='w-20 h-1 bg-white mt-5'></span>
</div>
<p className='text-white mt-5'>Graphic Artist - Web Designer - Illustrator</p>

    </div>
    </>
  )
}
