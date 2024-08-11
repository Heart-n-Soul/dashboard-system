import { TbEdit } from "react-icons/tb";
import ava1 from "../assets/images/ava1.jpg";
import ava2 from "../assets/images/ava2.jpg";
import ava3 from "../assets/images/ava3.jpg";
import ava4 from "../assets/images/ava4.jpg";
import ava5 from "../assets/images/ava5.jpg";


const CampaigneCard = ({
  title,
  status,
  id,
  lastUpdated,
  startDate,
  endDate,
  onEdit,
}) => {
//Determine the progress bar color and width based on the status

  let progressBarColor = "bg-gray-500"; // Default for Draft
  let progressBarWidth = "w-0"; // Default for Draft (no progress)

  if (status === "In Progress") {
    progressBarColor = "bg-green-500";
    progressBarWidth = "w-1/3";
  } else if (status === "Complete") {
    progressBarColor = "bg-green-500";
    progressBarWidth = "w-full";
  }

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
        <div className="flex cursor-pointer  text-sm items-center gap-2">
          <TbEdit
            onClick={() =>
              onEdit({ title, status, id, lastUpdated, startDate, endDate })
            }
          />
          <p className="hidden sm:block">Edit</p>
        </div>
      </div>
      <p className="text-sm">{title}</p>
      <p className="text-[10px] mb-1 text-secondary-2 mt-2">
        Status: <span className=" text-black ">{status}</span>
      </p>
      
      <div className="mb-3">
        <div className="w-full bg-gray-300 rounded-full h-2">
          <div
            className={`${progressBarColor} h-2 rounded-full ${progressBarWidth}`}
          ></div>
        </div>
      </div>

      <p className="text-[10px] text-secondary-2">
        Last Updated: <span className="text-black">{lastUpdated}</span>
      </p>
    </div>
  );
};

export default CampaigneCard;
