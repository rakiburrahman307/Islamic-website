import { CiHome } from "react-icons/ci";
import { ImBooks } from "react-icons/im";
import { FiBookOpen } from "react-icons/fi";
import { CiBookmark } from "react-icons/ci";
import { IoGridOutline } from "react-icons/io5";
import { TbBrandTelegram } from "react-icons/tb";
import { FaHandHoldingHeart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./style.css";

const LeftSideBar = () => {
  return (
    <div className='hidden md:flex w-28 bg-white flex-col items-center gap-5 px-6 mt-12'>
      <NavLink
        to='/'
        className='w-full h-14 mx-auto flex flex-col group cursor-pointer items-center justify-center hover:bg-white rounded-md'
      >
        <CiHome size={30} className='group-hover:text-[#2B9E76]' />
      </NavLink>

      <NavLink
        to='/books'
        className='w-full h-14 mx-auto flex flex-col group cursor-pointer items-center justify-center hover:bg-white rounded-md'
      >
        <ImBooks size={30} className='group-hover:text-[#2B9E76]' />
      </NavLink>

      <NavLink
        to='/book'
        className='w-full h-14 mx-auto flex flex-col group cursor-pointer items-center justify-center hover:bg-white rounded-md'
      >
        <FiBookOpen size={30} className=' group-hover:text-[#2B9E76]' />
      </NavLink>

      <NavLink
        to='/bookmarks'
        className='w-full h-14 mx-auto flex flex-col group cursor-pointer items-center justify-center hover:bg-white rounded-md'
      >
        <CiBookmark size={30} className=' group-hover:text-[#2B9E76]' />
      </NavLink>

      <NavLink
        to='/grid'
        className='w-full h-14 mx-auto flex flex-col group cursor-pointer items-center justify-center hover:bg-white rounded-md'
      >
        <IoGridOutline size={30} className=' group-hover:text-[#2B9E76]' />
      </NavLink>

      <NavLink
        to='/send'
        className='w-full h-14 mx-auto flex flex-col group cursor-pointer items-center justify-center hover:bg-white rounded-md'
      >
        <TbBrandTelegram size={30} className=' group-hover:text-[#2B9E76]' />
      </NavLink>

      <NavLink
        to='/life'
        className='w-full active h-16 mx-auto flex flex-col group cursor-pointer items-center justify-center hover:bg-white rounded-md'
      >
        <FaHandHoldingHeart size={30} className=' group-hover:text-[#2B9E76]' />
      </NavLink>
    </div>
  );
};

export default LeftSideBar;
