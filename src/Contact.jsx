import React from 'react'

export default function Contact() {
  return (
    <>
<div className='text-black text-center bg-white min-h-screen  py-10'>
    <div className='text-center flex items-center justify-center '>
    <h1 className="text-5xl  text-gray-900">Contact Section</h1>
    </div>

    <div className="flex justify-center text-center items-center flex-row gap-4">
<span className='w-20 h-1 bg-gray-900 mt-5'></span>
  <svg className="w-[25px] h-[25px] text-gray-900 mt-5 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/>
</svg>
<span className='w-20 h-1 bg-gray-900 mt-5'></span>
    </div>




    <form className="grid grid-cols-1 gap-4 mt-8 py-5">
            <div className='flex justify-start flex-col items-center w-full relative mt-9'>
                <label htmlFor="username"  className="block absolute bottom-12 left-[36%]  text-xl font-medium text-gray-700">Username</label>
                <input type="text" id="username"  className="mt-1 p-2 border border-gray-300 rounded min-w-96" placeholder="Enter your username"/>
            </div>
            <div className='flex justify-start flex-col items-center w-full relative mt-9'>
                <label htmlFor="pass"  className="block absolute bottom-12 left-[36%]  text-xl font-medium text-gray-700">Password</label>
                <input type="password" id="pass"  className="mt-1 p-2 border border-gray-300 rounded min-w-96" placeholder="Enter your Password"/>
            </div>
            <div className='flex justify-start flex-col items-center w-full relative mt-9'>
                <label htmlFor="RePassword"  className="block absolute bottom-12 left-[36%]  text-xl font-medium text-gray-700">Re-Password</label>
                <input type="text" id="RePassword"  className="mt-1 p-2 border border-gray-300 rounded min-w-96" placeholder="Enter your Password again"/>
            </div>
            <div className='flex justify-start flex-col items-center w-full relative mt-9'>
                <label htmlFor="Em"  className="block absolute bottom-12 left-[36%]  text-xl font-medium text-gray-700">Email</label>
                <input type="email" id="Em"  className="mt-1 p-2 border border-gray-300 rounded min-w-96" placeholder="Enter your Email"/>
            </div>
            
            <div className='flex justify-start flex-col items-center w-full relative '>
            <button className='bg-blue-600 text-white py-1 px-2 rounded-lg text-xl'>submit</button>
            </div>

    </form>
</div>


    </>
  )
}
