import { CiHome } from "react-icons/ci";
import { IoChatbubbleOutline } from "react-icons/io5";
import { HiOutlineSupport } from "react-icons/hi";
import { CiDollar } from "react-icons/ci";
import { PiBriefcase } from "react-icons/pi";
import { BiNetworkChart } from "react-icons/bi";
import { FiSidebar } from "react-icons/fi";
import NavItem from "./NavItem";

function NavBar() {
  return (
    <nav className="flex flex-col h-full gap-10 p-5 ">
      <div className="flex items-center justify-between">
        <h1 className="font-krona text-primary-2 text-2xl">Orbút</h1>
        <FiSidebar />
      </div>
      <div className="flex mt-5 p-3 h-[50%] flex-col justify-between font-poppins">
        <NavItem>
          <CiHome />
          <p>Dashboard</p>
        </NavItem>
        <NavItem>
          <BiNetworkChart />
          <p>Campaigns</p>
        </NavItem>
        <NavItem>
          <IoChatbubbleOutline />
          <p>Chat</p>
        </NavItem>
        <NavItem>
          <HiOutlineSupport />
          <p>Support Center</p>
        </NavItem>
        <NavItem>
          <CiDollar />
          <p>Leads</p>
        </NavItem>
        <NavItem>
          <PiBriefcase />
          <p>Archive</p>
        </NavItem>
      </div>
    </nav>
  );
}

export default NavBar;
