import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCampaign, editCampaign } from "../redux/campaignSlice";
import { createCampaign, updateCampaign } from "../api";

function CampaigneFormModal({ isOpen, onClose, initialData }) {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.campaigns.token);

  const [formData, setFormData] = useState({
    id: initialData?.id || "",
    name: initialData?.name || "",
    description: initialData?.description || "",
    status: initialData?.status || "Draft",
    startDate: initialData?.startDate || "",
    endDate: initialData?.endDate || "",
    bannerUrl: initialData?.bannerUrl || "",
    lastUpdated: new Date().toLocaleString(),
  });

  useEffect(() => {
    if (initialData) {
      setFormData({ ...initialData });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!formData.name) {
        throw new Error("Name is required");
      }

      if (!formData.startDate || !formData.endDate) {
        throw new Error("Start date and end date are required");
      }

      const formattedStartDate = new Date(formData.startDate).toISOString();
      const formattedEndDate = new Date(formData.endDate).toISOString();

      const updatedFormData = {
        name: formData.name,
        description: formData.description,
        start_date: formattedStartDate,
        end_date: formattedEndDate,
        banner_url: formData.bannerUrl,
        status: formData.status,
      };

      console.log("Data being sent:", updatedFormData);

      if (formData.id) {
        // Updating an existing campaign
        await updateCampaign(token, formData.id, updatedFormData);
        dispatch(editCampaign({ ...formData, lastUpdated: new Date().toLocaleString() }));
      } else {
        // Creating a new campaign
        const newCampaign = await createCampaign(token, updatedFormData);
        dispatch(addCampaign({ ...newCampaign, id: newCampaign.id, lastUpdated: new Date().toLocaleString() }));
      }
      onClose();
    } catch (error) {
      console.error("Error creating or updating campaign:", error);
      alert(`Failed to submit the form: ${error.message}`);
    }
  };

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-md w-[99%] max-w-lg relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600"
        >
          &times;
        </button>
        <h2 className="text-xl mb-3">
          {initialData ? "Update Campaign" : "Create Campaign"}
        </h2>
        <p className="text-sm mb-3">
          {initialData ? "Edit Campaign details" : "Add a new Campaign"} by
          filling in the necessary details
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Campaign Name"
              className="mt-1 p-2 text-sm block w-full border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div className="mb-4">
            <textarea
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleChange}
              className="mt-1 block w-full text-sm border p-2 border-gray-300 rounded-md shadow-sm"
            ></textarea>
          </div>
          <div className="mb-4 flex space-x-4">
            <div className="w-1/2">
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                className="mt-1 block text-sm text-secondary-2 p-2 w-full border border-gray-300 rounded-md shadow-sm"
              />
            </div>
            <div className="w-1/2">
              <input
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                className="mt-1 block text-secondary-2 text-sm p-2 w-full border border-gray-300 rounded-md shadow-sm"
              />
            </div>
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="bannerUrl"
              value={formData.bannerUrl}
              onChange={handleChange}
              placeholder="Banner URL"
              className="mt-1 block text-sm p-2 w-full border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div className="mb-4">
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="mt-1 text-sm p-2 text-secondary-2 block w-full border border-gray-300 rounded-md shadow-sm"
            >
              <option value="Draft">Draft</option>
              <option value="In Progress">In Progress</option>
              <option value="Complete">Complete</option>
            </select>
          </div>
          <div className="flex justify-between w-full sm:w-[300px]">
            <button
              onClick={onClose}
              type="button"
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded-[20px]"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-primary-2 text-white px-4 py-2 rounded-[20px]"
            >
              {initialData ? "Update Campaign" : "Create Campaign"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CampaigneFormModal;
