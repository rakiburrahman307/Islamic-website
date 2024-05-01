import "./style.css";
const BookShelf = () => {
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
    <div className='w-96 bg-white mt-5 ml-5 rounded-md pb-3'>
      <div className='flex justify-around border-b-2 items-center'>
        <button className='w-full h-14 text-white bg-[#2B9E76] rounded-tl-xl'>
          বই
        </button>
        <button className='w-full h-14 text-black rounded-tr-xl'>অধ্যায়</button>
      </div>
      <div className='p-5 flex items-center justify-center'>
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
      <div className='w-full overflow-y-scroll max-h-[60vh] p-5 rounded-lg'>
        {data?.map((item) => (
          <div
            key={item?.id}
            className='flex gap-10 group hover:bg-[#EBFCF6] p-5 rounded-xl cursor-pointer'
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
  );
};

export default BookShelf;
