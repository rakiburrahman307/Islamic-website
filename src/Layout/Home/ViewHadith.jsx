import { TbBooks } from "react-icons/tb";
import { MdKeyboardArrowRight, MdOutlineReport } from "react-icons/md";
import { GiBookshelf } from "react-icons/gi";
import { BsBook } from "react-icons/bs";
import { IoSettingsOutline, IoCopyOutline, IoMenu } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";
import { GoShareAndroid } from "react-icons/go";
import { AiOutlineExport } from "react-icons/ai";
import { useState } from "react";
const ViewHadith = () => {
  const [openLeftSidebar, setLeftSidebar] = useState(false);
  const data = [
    { id: 1, title: "ওহীর সূচনা অধ্যায়", body: "হাদিসের রেঞ্জ: ১ - ৭" },
    { id: 2, title: "ওহীর সূচনা অধ্যায়", body: "হাদিসের রেঞ্জ: ১ - ৭" },
    { id: 3, title: "ওহীর সূচনা অধ্যায়", body: "হাদিসের রেঞ্জ: ১ - ৭" },
    { id: 4, title: "ওহীর সূচনা অধ্যায়", body: "হাদিসের রেঞ্জ: ১ - ৭" },
    { id: 5, title: "ওহীর সূচনা অধ্যায়", body: "হাদিসের রেঞ্জ: ১ - ৭" },
    { id: 6, title: "ওহীর সূচনা অধ্যায়", body: "হাদিসের রেঞ্জ: ১ - ৭" },
    { id: 7, title: "ওহীর সূচনা অধ্যায়", body: "হাদিসের রেঞ্জ: ১ - ৭" },
    { id: 8, title: "ওহীর সূচনা অধ্যায়", body: "হাদিসের রেঞ্জ: ১ - ৭" },
    { id: 9, title: "ওহীর সূচনা অধ্যায়", body: "হাদিসের রেঞ্জ: ১ - ৭" },
    { id: 10, title: "ওহীর সূচনা অধ্যায়", body: "হাদিসের রেঞ্জ: ১ - ৭" },
  ];
  return (
    <div className='w-full md:w-[68%] bg-[#F2F4F6] mt-5 overflow-y-scroll max-h-[86vh] rounded-md'>
      <div
        onClick={() => setLeftSidebar(true)}
        className='flex gap-3 bg-white p-5 rounded-xl mb-5 md:hidden lg:hidden'
      >
        <IoMenu size={25} />
        <p>সহিহ বুখারী</p>
      </div>
      <div className='h-14 bg-[#FAFBFB] border-b-2 p-2 flex items-center'>
        <TbBooks />
        <MdKeyboardArrowRight />
        <p>Bukhari</p>
        <MdKeyboardArrowRight />
        <p>1</p>
      </div>

      {Array(10)
        .fill(null)
        .map((_, index) => {
          return (
            <div key={index}>
              <div className='flex justify-between items-center bg-white p-7 rounded-b-xl'>
                <div className='flex gap-2 items-center'>
                  <GiBookshelf className='text-[#2B9E76]' size={55} />
                  <div>
                    <p className='text-2xl font-medium mb-3'>সহিহ বুখারী</p>
                    <p className='text-sm font-normal'>সর্বমোট হাদিস - ৭৫৬৩</p>
                  </div>
                </div>
                <p>صحيح البخاري</p>
              </div>

              <div className='flex gap-3 items-center p-5 bg-white mt-4 rounded-xl'>
                <p className='p-2 flex items-center justify-center text-white w-10 rounded-2xl bg-[#2B9E76]'>
                  ১
                </p>
                <p className='text-base'>ওহীর সূচনা অধ্যায়</p>
              </div>

              <div className='p-6 rounded-xl bg-white mt-5'>
                <div className='flex gap-3 items-center'>
                  <BsBook className='text-[#2B9E76]' size={20} />
                  <p>১/১. অধ্যায়ঃ</p>
                </div>
                <p className='text-lg font-semibold mt-2 '>
                  আল্লাহ্‌র রসূল (সাল্লাল্লাহু &apos;আলাইহি ওয়া সাল্লাম)- এর
                  প্রতি কীভাবে ওয়াহী [১] শুরু হয়েছিল।
                </p>
                <hr className='my-5' />
                <p className='text-lg font-normal'>
                  এ মর্মে আল্লাহ তা’আলার বাণীঃ “নিশ্চয়ই আমি আপনার প্রতি সেরূপ
                  ওয়াহী প্রেরণ করেছি যেরূপ নূহ ও তাঁর পরবর্তী নবীদের প্রতি ওয়াহী
                  প্রেরণ করেছিলাম”। (সূরা আন-নিসা ৪/১৬৩)
                </p>
              </div>

              <div className='bg-white mt-5 rounded-xl p-6'>
                <div className='flex items-center gap-3 text-[#2B9E76]'>
                  <IoSettingsOutline size={20} />
                  <p>১</p>
                </div>
                <p
                  style={{ direction: "rtl" }}
                  className='text-5xl font-light text-justify text my-5 p-3'
                >
                  حَدَّثَنَا الْحُمَيْدِيُّ عَبْدُ اللَّهِ بْنُ الزُّبَيْرِ،
                  قَالَ حَدَّثَنَا سُفْيَانُ، قَالَ حَدَّثَنَا يَحْيَى بْنُ
                  سَعِيدٍ الأَنْصَارِيُّ، قَالَ أَخْبَرَنِي مُحَمَّدُ بْنُ
                  إِبْرَاهِيمَ التَّيْمِيُّ، أَنَّهُ سَمِعَ عَلْقَمَةَ بْنَ
                  وَقَّاصٍ اللَّيْثِيَّ، يَقُولُ سَمِعْتُ عُمَرَ بْنَ
                  الْخَطَّابِ ـ رضى الله عنه ـ عَلَى الْمِنْبَرِ قَالَ سَمِعْتُ
                  رَسُولَ اللَّهِ صلى الله عليه وسلم يَقُولُ إِنَّمَا
                  الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا
                  نَوَى، فَمَنْ كَانَتْ هِجْرَتُهُ إِلَى دُنْيَا يُصِيبُهَا أَوْ
                  إِلَى امْرَأَةٍ يَنْكِحُهَا فَهِجْرَتُهُ إِلَى مَا هَاجَرَ
                  إِلَيْهِ
                </p>
                <p className='mt-14 text-[#2B9E76]'>
                  ‘আলক্বামাহ ইব্‌নু ওয়াক্কাস আল-লায়সী (রহঃ) থেকে বর্ণিত:
                </p>
                <p className='text-justify text-lg mt-5'>
                  আমি ‘উমর ইব্‌নুল খাত্তাব (রাঃ)-কে মিম্বারের উপর দাঁড়িয়ে বলতে
                  শুনেছিঃ আমি আল্লাহর রসূল (সাল্লাল্লাহু ‘আলাইহি ওয়া সাল্লাম)-কে
                  বলতে শুনেছিঃ কাজ (এর প্রাপ্য হবে) নিয়ত অনুযায়ী। আর মানুষ তার
                  নিয়ত অনুযায়ী প্রতিফল পাবে। তাই যার হিজরত হবে ইহকাল লাভের অথবা
                  কোন মহিলাকে বিবাহ করার উদ্দেশ্যে- তবে তার হিজরত সে উদ্দেশ্যেই
                  হবে, যে জন্যে, সে হিজরত করেছে। (৫৪, ২৫২৯, ৩৮৯৮, ৫০৭০, ৬৬৮৯,
                  ৬৯৫৩; মুসলিম ২৩/৪৫ হাঃ ১৯০৭, আহমাদ ১৬৮) ( আধুনিক প্রকাশনী- ১,
                  ইসলামিক ফাউন্ডেশন ১)
                </p>
                <div className='flex justify-between items-center gap-5 mt-10 mb-5'>
                  <div className='md:flex gap-2 hidden'>
                    <p>হাদিসের মান :</p>
                    <button className='text-sm bg-[#2B9E76] px-2 py-1 rounded-md text-white cursor-pointer'>
                      {" "}
                      সহিহ হাদিস
                    </button>
                  </div>
                  <div className='flex items-center gap-12'>
                    <IoCopyOutline className='cursor-pointer' size={25} />
                    <CiBookmark className='cursor-pointer' size={25} />
                    <GoShareAndroid className='cursor-pointer' size={25} />
                    <MdOutlineReport className='cursor-pointer' size={25} />
                    <AiOutlineExport className='cursor-pointer' size={25} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}

      {/* right side menu ber modal */}
      <div
        className={`fixed z-[100] inset-0 bg-black/20 backdrop-blur-sm duration-100 ${
          openLeftSidebar ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div
          className={`absolute left-0 min-w-full rounded-lg bg-white pb-5 text-center drop-shadow-2xl dark:bg-gray-800 dark:text-white ${
            openLeftSidebar
              ? "translate-x-0 opacity-100 duration-300"
              : "-translate-x-full opacity-0 duration-150"
          } rounded-none min-h-full`}
        >
          <div className='flex justify-between items-center p-5 gap-5 w-full'>
            <h4 className='text-xl font-semibold'>ক্যাটাগরি</h4>
            <svg
              onClick={() => setLeftSidebar(false)}
              className='w-8 cursor-pointer fill-black dark:fill-white'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z'></path>
            </svg>
          </div>
          {/* ------------------------------------------------------------------------------------  */}

          <div className='md:flex md:flex-col w-full bg-white mt-5 pb-3'>
            <div className='flex w-full justify-around border-b-2 items-center'>
              <button className='w-full h-14 text-black'>বই</button>
              <button className='w-full h-14 text-white bg-[#2B9E76]'>
                অধ্যায়
              </button>
            </div>
            <div className='mt-5 flex items-center justify-center px-3'>
              <label
                htmlFor='search'
                className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'
              >
                Search
              </label>
              <div className='relative w-full'>
                <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
                  <svg
                    className='w-4 h-4 text-gray-500 dark:text-gray-400'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 20 20'
                  >
                    <path
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                    />
                  </svg>
                </div>
                <input
                  type='search'
                  id='search'
                  className='block w-full p-4 ps-10 text-sm text-gray-900 border border-none rounded-lg bg-[#F2F4F6] focus:ring-0 focus:border-none dark:bg-gray-700 dark:border-none dark:placeholder-gray-400 dark:text-white dark:focus:ring-0 dark:focus:border-none'
                  placeholder='Search'
                  required
                />
              </div>
            </div>
            <div className='w-full overflow-y-scroll max-h-[60vh]'>
              {data?.map((item) => (
                <div
                  key={item?.id}
                  className='flex gap-12 group hover:bg-[#EBFCF6] p-5 rounded-xl cursor-pointer'
                >
                  <div className='mask mask-hexagon-2 cursor-pointer bg-gray-300 group-hover:bg-[#2B9E76] group-hover:text-white p-5'>
                    <p>{item?.id}</p>
                  </div>

                  <div>
                    <h2>{item?.title}</h2>
                    <p>{item?.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewHadith;
