import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";

const TopScroll = () => {
  const { pathname } = useLocation();

  // router top scroll
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // top scroll
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      onClick={scrollToTop}
      className={`fixed md:hidden lg:hidden group flex justify-center items-center bg-[#2B9E76] bottom-12 right-10 md:bottom-16 lg:bottom-10 lg:right-10  w-10 h-10 rounded-full text-center border-2 shadow-xl z-50 hover:bg-white/20 duration-200 cursor-pointer dark:bg-semi-dark`}
    >
      <FaArrowUp
        className={`text-white group-hover:text-[#2B9E76]`}
      ></FaArrowUp>
    </div>
  );
};

export default TopScroll;
