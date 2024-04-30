import { useState } from "react";
import { IoIosSettings } from "react-icons/io";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openRightSidebar, setRightSidebar] = useState(false);

  return (
    <nav className='flex items-center justify-between bg-white px-4 py-2 text-black mb-24'>
      <div className='flex gap-4 cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold text-white '>
        <h2 className='text-green-500 md:text-black scale-100 transition-all duration-200 hover:scale-110'>
          Logo
        </h2>
        <div>
          <h2 className='text-green-500 md:text-black text-lg font-semibold'>
            হাদিস সমূহ
          </h2>
          <h4 className='hidden md:flex text-black text-xs font-light'>
            হাদিস পড়ুন শিখুন এবং জানুন
          </h4>
        </div>
      </div>
      <div className='flex items-center justify-between gap-5 md:gap-10'>
        <div className='rounded-lg invisible md:visible border-2 w-12 h-10 md:w-56 md:h-12 flex justify-between items-center'>
          <div className='flex w-14 h-10 justify-center items-center'>
            <CiSearch className='text-2xl text-black' />
          </div>
          <input
            className='w-44 invisible md:visible border-none outline-none text-black dark:text-white ring-transparent focus:ring-0'
            placeholder='Search Hadith'
            type='text'
          />
        </div>
        <button
          onClick={() => setOpenModal(true)}
          className='p-2 bg-gray-300 border rounded-xl'
        >
          <CiSearch className='text-2xl text-black' />
        </button>
        <div
          onClick={() => setRightSidebar(true)}
          className='p-2 rounded-2xl bg-[#2B9E76] cursor-pointer group'
        >
          <IoIosSettings
            className='text-white group-hover:scale-110 duration-200'
            size={25}
          />
        </div>
      </div>

      <div
        onClick={() => setOpenModal(false)}
        className={`fixed z-[100] flex items-center justify-center ${
          openModal ? "opacity-1 visible" : "invisible opacity-0"
        } inset-0 h-full w-full bg-black/20 backdrop-blur-sm duration-100`}
      >
        <div
          onClick={(e_) => e_.stopPropagation()}
          className={`absolute w-full rounded-lg bg-white dark:bg-gray-900 drop-shadow-2xl sm:w-[500px] ${
            openModal
              ? "opacity-1 translate-y-0 duration-300"
              : "-translate-y-20 opacity-0 duration-150"
          }`}
        >
          <div className='px-5 pb-5 pt-3 lg:pb-10 lg:pt-5 lg:px-10'>
            <input
              className='w-full mt-3 h-12 border-none bg-gray-300 rounded-xl outline-none text-black dark:text-white ring-transparent focus:ring-0'
              placeholder='Search Hadith'
              type='text'
            />
            <div className='mt-5'>
              <form className='max-w-sm mx-auto'>
                <label
                  htmlFor='small'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  হাদিসের বই সিলেক্ট করুন
                </label>
                <select
                  id='small'
                  className='block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-white focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                >
                  <option selected>সহিহ বুখারী</option>
                  <option value='সহিহ বুখারী'>সহিহ বুখারী</option>
                  <option value='সহিহ মুসলিম'>সহিহ মুসলিম</option>
                  <option value='সুনানে আন-নাসায়ী'>সুনানে আন-নাসায়ী</option>
                  <option value='সুনানে আবু দাউদ'>সুনানে আবু দাউদ</option>
                </select>
                <label
                  htmlFor='default'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  হাদিসের অধ্যায় সিলেক্ট করুন
                </label>
                <select
                  id='default'
                  className='bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-white focus:border-white block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                >
                  <option selected>ঈমান</option>
                  <option value='ঈমান'>ঈমান</option>
                  <option value='তাহারাত (পবিত্রতা)'>তাহারাত (পবিত্রতা)</option>
                  <option value='হায়িয (ঋতুস্রাব)'>হায়িয (ঋতুস্রাব)</option>
                  <option value='সালাত'>সালাত</option>
                </select>
              </form>
            </div>
            {/* button type will be submit for handling form submission*/}
            <div className='flex justify-between items-center gap-3'>
              <button
                onClick={() => setOpenModal(false)}
                className='rounded-lg bg-gray-300 px-8 py-3 text-xl font-light text-black duration-300 active:scale-95'
              >
                বাতিল
              </button>
              <button className='rounded-lg bg-[#2B9E76] px-8 py-3 text-xl text-white duration-300 active:scale-95'>
                সার্চ করুন
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* right side menu ber modal */}
      <div
        className={`fixed z-[100] flex items-center justify-end ${
          openRightSidebar ? "opacity-1 visible" : "invisible opacity-0"
        } inset-0 bg-black/20 backdrop-blur-sm duration-100`}
      >
        <div
          className={`absolute min-w-[350px] rounded-lg bg-white p-5 pb-5 text-center drop-shadow-2xl dark:bg-gray-800 dark:text-white ${
            openRightSidebar
              ? "-translate-x-100 opacity-1 duration-300"
              : "translate-x-100 opacity-0 duration-150"
          } min-h-full rounded-none`}
        >
       <div className="flex justify-between items-center gap-5 w-full">
       <h4 className="text-xl font-semibold">সেটিংস</h4>
          <svg
            onClick={() => setRightSidebar(false)}
            className='mx-auto mr-0 w-8 cursor-pointer fill-black dark:fill-white'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g strokeWidth='0'></g>
            <g strokeLinecap='round' strokeLinejoin='round'></g>
            <g>
              <path d='M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z'></path>
            </g>
          </svg>
       </div>
       <div className="mt-14 w-full">
       <label
                  htmlFor='default'
                  className='block mb-2 text-sm font-semibold text-left text-gray-900 dark:text-white'
                >
                  আরবি ফন্ট সিলেক্ট করুন
                </label>
                <select
                  id='default'
                  className='bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-white focus:border-white block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                >
                  <option selected>Me Quran</option>
                  <option value='Me Quran'>Me Quran</option>
                  <option value='KFGQ'>KFGQ</option>
                  <option value='Al Mushaf'>Al Mushaf</option>
                  <option value='Amiri'>Amiri</option>
                </select>
       </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
