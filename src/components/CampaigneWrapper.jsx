import { MdArrowOutward } from "react-icons/md";
import { IoIosAddCircleOutline } from "react-icons/io";
import Button from "./Button";
import CampaigneCard from "./CampaigneCard";


const CampaigneWrapper = () => {
  return (
    <div className="font-poppins">
        CampaigneWrapper
        <MdArrowOutward />
        <CampaigneCard />
        <Button>
        <IoIosAddCircleOutline />

        </Button>


    </div>
  )
}

export default CampaigneWrapper