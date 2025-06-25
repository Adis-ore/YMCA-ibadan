import { FaHandshake } from "react-icons/fa"; 
 import { IoIosArrowForward } from "react-icons/io"; 
import { FiMenu } from "react-icons/fi"; 
import { BiDonateHeart } from "react-icons/bi";
import  { React, useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {

  const [visible, setVisible] = useState(false)

  return (
    <div className="flex items-center  justify-between py-1  font-medium">
      <Link to="/">
        <img src={assets.speedtouch} className="w-25" alt="" />
      </Link>
      <ul className="hidden sm:flex gap-5 text-sm text-blue-500">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-red-600 hidden" />
        </NavLink>
        <NavLink to="/team" className="flex flex-col items-center gap-1">
          <p>TEAM</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-red-600 hidden" />
        </NavLink>
        <NavLink to="/program" className="flex flex-col items-center gap-1">
          <p>PROGRAM</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-red-600 hidden" />
        </NavLink>
        <NavLink to="/projects" className="flex flex-col items-center gap-1">
          <p>PROJECTS</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-red-600 hidden" />
        </NavLink>
        {/* <NavLink to="/media" className="flex flex-col items-center gap-1">
          <p>MEDIA</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-red-600 hidden" />
        </NavLink> */}
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-red-600 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-red-600 hidden" />
        </NavLink>
      </ul>
      {/* ---------Donation btn ------------- */}
      <div className="flex items-center gap-6">
        <Link to='/donation'>
          <button className="bg-red-600  text-white px-9 m-4  py-2 rounded-md hidden cursor-pointer sm:flex">
            <FaHandshake className="text-[20px]" />
          </button>
        </Link>
        <FiMenu onClick={()=> setVisible(true)} className="cursor-pointer  sm:hidden" />
      </div>
      {/* ----------side bar visibility ------------ */}
     {/* ----------side bar visibility ------------ */}
<div
  className={`fixed top-0 right-0 bottom-0 overflow-hidden bg-white transition-all z-50 ${
    visible ? 'w-64 sm:w-72' : 'w-0'
  }`}
  style={{ transitionProperty: 'width', transitionDuration: '300ms' }}
>
  <div className='flex flex-col text-gray-600 h-full'>
    <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
      <IoIosArrowForward className="h-4 rotate-180" />
      <p>Back</p>
    </div>
    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border-b-2' to='/'>HOME</NavLink>
    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border-b-2' to='/team'>TEAM</NavLink>
    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border-b-2' to='/program'>PROGRAM</NavLink>
    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border-b-2' to='/projects'>PROJECTS</NavLink>
    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border-b-2' to='/about'>ABOUT</NavLink>
    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border-b-2' to='/contact'>CONTACT</NavLink>
  </div>
</div>

    </div>
  );
};

export default Navbar;
