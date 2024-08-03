import { IoMdNotificationsOutline } from "react-icons/io";
import userAvatar from "../assets/images/ava6.jpg";
import { FiSidebar } from "react-icons/fi";

const DashboardHeader = () => {
  return (
    <header className="font-poppins flex items-center justify-between">
      <div className="sm:hidden">
        <FiSidebar />
      </div>

      <h2 className="text-lg md:text-xl">Campaigns</h2>

      <div className="flex gap-4">
        <figure className="border w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center">
          <IoMdNotificationsOutline className="w-6 h-6" />
        </figure>
        <div className="flex items-center gap-2">
          <figure className="w-8 h-8 sm:w-12 sm:h-12 rounded-full">
            <img
              src={userAvatar}
              alt="user avatar"
              className="w-full rounded-full"
            />
          </figure>
          <p className="sm:hidden text-sm">E. Frimpong</p>
          <p className="hidden sm:block text-base">Ebenezer Frimpong</p>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
