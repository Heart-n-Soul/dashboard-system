import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCampaigns, removeCampaign } from "../redux/campaignSlice";
import { MdArrowOutward } from "react-icons/md";
import { IoIosAddCircleOutline } from "react-icons/io";
import Button from "./Button";
import CampaigneCard from "./CampaigneCard";
import CampaigneFormModal from "./CampaigneFormModal";
import { deleteCampaign } from "../api"; // Import the deleteCampaign function

const CampaigneWrapper = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.campaigns.token); // Get the token from Redux

  const campaigns = useSelector((state) => state.campaigns.campaigns);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editData, setEditData] = useState(null);

  useEffect(() => {
    const storedCampaigns = JSON.parse(localStorage.getItem("campaigns")) || [];
    dispatch(loadCampaigns(storedCampaigns));
  }, [dispatch]);

  const handleAddClick = () => {
    
    setEditData(null);
    setIsModalOpen(true);
    console.log("isModalOpen", isModalOpen);
  };

  const handleEditClick = (campaign) => {
    setEditData(campaign);
    setIsModalOpen(true);
  };

  const handleDelete = async (id) => {
    try {
      await deleteCampaign(token, id);
      dispatch(removeCampaign(id));
    } catch (error) {
      alert("Failed to delete the campaign. Please try again.");
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="font-poppins px-5">
      <div className="text-sm flex justify-between mb-2">
        <h3 className="font-bold">Recent Campaigns</h3>
        <div className="flex border-b border-b-secondary-2">
          <p>View all</p>
          <MdArrowOutward />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {["Draft", "In Progress", "Complete"].map((status) => (
          <div key={status}>
            <p className="text-xs flex gap-2 mb-2">
              {status}{" "}
              <span className="bg-secondary-3 px-[6px] py-[1px] rounded-sm font-semibold">
                {campaigns.filter((c) => c.status === status).length}
              </span>
            </p>
            {campaigns
              .filter((c) => c.status === status)
              .map((campaign) => (
                <CampaigneCard
                  key={campaign.id}
                  {...campaign}
                  onEdit={() => handleEditClick(campaign)}
                  onDelete={() => handleDelete(campaign.id)}
                />
              ))}
            {status === "Draft" && (
              <Button
                typography="mt-2 flex w-full justify-center items-center gap-1 text-xs border-2 border-dashed border-secondary-3 rounded-md"
                onClick={handleAddClick}
              >
                <IoIosAddCircleOutline />
                <span className="sm:hidden">Add</span>
                <span className="hidden sm:block sm:text-sm">Add Campaign</span>
              </Button>
            )}
          </div>
        ))}
      </div>
      <CampaigneFormModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        initialData={editData}
      />
    </section>
  );
};

export default CampaigneWrapper;
