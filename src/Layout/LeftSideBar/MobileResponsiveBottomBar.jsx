import { IoMdHome } from "react-icons/io";
import { CiBookmark } from "react-icons/ci";
import { IoBookOutline } from "react-icons/io5";
import { TbBooks } from "react-icons/tb";
import { NavLink } from "react-router-dom";

const MobileNavbar = () => {
  return (
    <div className='fixed -bottom-7 w-full z-50 my-5 md:hidden lg:hidden'>
      <div className='flex items-center justify-center top-4 h-16 w-full'>
        <div className='group flex items-center justify-center bg-white py-3 w-full h-full dark:bg-semi-dark dark:text-secondary-text-dark'>
          <NavLink to='/' className='flex flex-col items-center'>
            <IoMdHome
              size={25}
              className={`text-secondary-text group-hover:text-[#2B9E76]`}
            />
            <h4
              className={`text-secondary-text text-xs group-hover:text-[#2B9E76]`}
            >
              Home
            </h4>
          </NavLink>
        </div>
        <div className='group flex items-center justify-center bg-white py-3 w-full h-full dark:bg-semi-dark dark:text-secondary-text-dark'>
          <NavLink to='/category' className='flex flex-col items-center'>
            <TbBooks
              size={25}
              className={`text-secondary-text group-hover:text-[#2B9E76]`}
            />
            <h4
              className={`text-secondary-text text-xs group-hover:text-[#2B9E76]`}
            >
              Books
            </h4>
          </NavLink>
        </div>
        <div className='group flex items-center justify-center bg-white py-3 w-full h-full dark:bg-semi-dark dark:text-secondary-text-dark'>
          <NavLink to='/cart' className='flex flex-col items-center'>
            <IoBookOutline
              size={25}
              className={`text-gray-500 group-hover:text-[#2B9E76]`}
            />
            <h4
              className={`text-secondary-text text-xs group-hover:text-[#2B9E76]`}
            >
              Book
            </h4>
          </NavLink>
        </div>
        <div className='group flex items-center justify-center bg-white py-3 w-full h-full dark:bg-semi-dark dark:text-secondary-text-dark'>
          <NavLink to='/login' className='flex flex-col items-center'>
            <CiBookmark
              size={25}
              className={`text-secondary-text group-hover:text-[#2B9E76]`}
            />
            <h4
              className={`text-secondary-text text-xs group-hover:text-[#2B9E76]`}
            >
              Bookmark
            </h4>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
