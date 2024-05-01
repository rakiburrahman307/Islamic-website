import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import LeftSideBar from "../LeftSideBar/LeftSideBar";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex">
        <LeftSideBar></LeftSideBar>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Root;
