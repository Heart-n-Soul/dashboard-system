import { MdArrowOutward } from "react-icons/md";
import { IoIosAddCircleOutline } from "react-icons/io";
import Button from "./Button";
import CampaigneCard from "./CampaigneCard";

const CampaigneWrapper = () => {
  let draftCount, progressCount, completeCount;
  return (
    <section className="font-poppins px-5">
      <div className="text-sm flex justify-between mb-2">
        <h3 className="font-bold">Recent Campaigns</h3>
        <div className="flex border-b border-b-secondary-2">
          <p >View all</p>
          <MdArrowOutward />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div>
          <p className="text-xs flex gap-2 mb-2">
            Draft <span className="bg-secondary-3 px-[6px] py-[1px] rounded-sm font-semibold">{draftCount}</span>
          </p>
          <CampaigneCard />
          {/* <div></div> */}
          <Button typography="mt-2  flex w-full justify-center items-center gap-1 text-xs border-2 border-dashed border-secondary-3 rounded-md">
            <IoIosAddCircleOutline />
            <span className="sm:hidden">Add</span>

            <span className="hidden sm:block sm:text-sm">Add Campaign</span>
          </Button>
        </div>
        <div>
          <p className="text-xs flex gap-2 mb-2">
            In Progress <span className="bg-secondary-3 px-[6px] py-[1px] rounded-sm font-semibold">7{progressCount}</span>
          </p>
        </div>
        <div>
          <p className="text-xs flex gap-2 mb-2">
            Completed <span className="bg-secondary-3 px-[6px] py-[1px] rounded-sm font-semibold">{completeCount}</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CampaigneWrapper;
