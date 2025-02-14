import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
    

<nav className="bg-[#2C3E50] fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 z-50">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <NavLink to={''} className="flex items-center space-x-3 rtl:space-x-reverse">
      <span className="self-center text-white text-2xl font-semibold whitespace-nowrap dark:text-white">START FRAMEWORK
      </span>
  </NavLink>

  <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 ">
      <li>
        <NavLink to={'/about'} className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-500 md:p-0">About</NavLink>
      </li>
      <li>
        <NavLink to={'/proto'} className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-500 md:p-0">Protofolio</NavLink>
      </li>
      <li>
        <NavLink to={'/contact'} className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-500 md:p-0">Contact</NavLink>
      </li>
    </ul>
  </div>
  </div>
</nav>

    </>
  )
}
