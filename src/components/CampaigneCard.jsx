import { TbEdit } from "react-icons/tb";
import ava1 from "../assets/images/ava1.jpg";
import ava2 from "../assets/images/ava2.jpg";
import ava3 from "../assets/images/ava3.jpg";
import ava4 from "../assets/images/ava4.jpg";
import ava5 from "../assets/images/ava5.jpg";

// w-10 h-10 rounded-full border-2 border-white -ml-2 first:ml-0

const CampaigneCard = ({ title, status }) => {
    
  return (
    <div className=" border rounded-md p-5">
      <div className="flex justify-between mb-3">
        <figure className="flex">
          <img
            src={ava1}
            alt="avatar of a girl"
            className="w-6 h-6 rounded-full border-2 border-secondary-3 sm:-mr-2 "
          />
          <img
            src={ava2}
            alt="faceless man drawing"
            className="w-6 h-6 hidden sm:block rounded-full border-2 border-white -mr-2"
          />
          <img
            src={ava3}
            alt="faceless man drawing"
            className="w-6 h-6 hidden sm:block rounded-full border-2 border-white -mr-2"
          />
          <img
            src={ava4}
            alt="grown black man with beards"
            className="w-6 h-6 hidden sm:block rounded-full border-2 border-white -mr-2"
          />
          <img
            src={ava5}
            alt="faceless woman drawing"
            className="w-6 h-6 hidden sm:block rounded-full border-2 border-white -mr-2 last:mr-0"
          />
        </figure>
        <div className="flex text-sm items-center gap-2">
          <TbEdit />
          <p className="hidden sm:block">Edit</p>
        </div>
      </div>
      <p>{title}</p>
      <p className="text-[10px] mb-1 mt-2">Status: <span className="text-secondary-2">{status}</span></p>
      {/* w-1/3 
      w-full 
      w-0 
      bg-gray-500 
      bg-green-500 */}
      <div className="mb-3">
        <div className="w-full bg-gray-300 rounded-full h-2">
          {/* <div
            className={`${progressColor} h-2 rounded-full ${progressWidth}`}
          ></div> */}
        </div>
      </div>

      <p className="text-[10px]">
        Last Updated: <span>{}</span>
      </p>
    </div>
  );
};

export default CampaigneCard;
