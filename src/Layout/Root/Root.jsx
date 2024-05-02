import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import LeftSideBar from "../LeftSideBar/LeftSideBar";
import MobileNavbar from "../LeftSideBar/MobileResponsiveBottomBar";

const Root = () => {
  return (
    <div className="w-full">
      <Navbar></Navbar>
      <div className='flex flex-col md:flex-row'>
        <LeftSideBar></LeftSideBar>
        <MobileNavbar/>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Root;
