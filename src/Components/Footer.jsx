import React from 'react'

export default function Footer() {
  return (
    <>
      <div className='text-center sm:flex-none md:flex md:justify-evenly md:items-center bg-[#2C3E50] py-16 text-white'>
     
        <div className=" md:flex md:justify-between md:items-center flex-col  gap-4">
          <h1 className='text-3xl '>Location</h1>
          <p className='text-xl'>2215 John Daniel Drive</p>
          <p className='text-xl'>Clark, MO 65243</p>
        </div>
       
        <div className='mb-6'>
          <h1 className='text-3xl md:pb-7 mt-3 md:mt-0 '>AROUND THE WEB</h1>
        <div className='flex sm:gap-3 justify-center sm:items-center sm:text-center sm:mx-auto'>
        <svg className="w-[35px] h-[35px]  border border-white rounded-full  text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fillRule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clip-rule="evenodd"/>
</svg>
        <svg className="w-[35px] h-[35px]  border border-white rounded-full  text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fillRule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clip-rule="evenodd"/>
</svg>
        <svg className="w-[35px] h-[35px]  border border-white rounded-full  text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fillRule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clip-rule="evenodd"/>
</svg>
        <svg className="w-[35px] h-[35px]  border border-white rounded-full  text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fillRule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clip-rule="evenodd"/>
</svg>
        </div>
        </div>

        <div className="md:flex md:justify-around md:items-center flex-col gap-4">
          <h1 className='text-3xl '>ABOUT FREELANCER</h1>
          <p className='text-xl'>Freelance is a free to use, licensed Bootstrap theme</p>
          <p className='text-xl'>created by me </p>
        </div>

      </div>
      <div className='text-white text-xl py-3 bg-[#1A252F] text-center'>
        <h1>Copyright © Your Website 2021</h1>
      </div>
    </>
  )
}
