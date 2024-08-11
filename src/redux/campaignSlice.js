import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  campaigns: [],
  token: localStorage.getItem("authToken") || [], // Store token here
};


const campaignSlice = createSlice({
  name: "campaigns",
  initialState,
  reducers: {
    loadCampaigns(state, action) {
      state.campaigns = action.payload;
    },
    addCampaign(state, action) {
      state.campaigns.push(action.payload);
      localStorage.setItem("campaigns", JSON.stringify(state.campaigns));
    },
    editCampaign(state, action) {
      const index = state.campaigns.findIndex(
        (c) => c.id === action.payload.id
      );
      if (index !== -1) {
        state.campaigns[index] = action.payload;
        localStorage.setItem("campaigns", JSON.stringify(state.campaigns));
      }
    },
    removeCampaign(state, action) {
      state.campaigns = state.campaigns.filter(
        (campaign) => campaign.id !== action.payload
      );
      localStorage.setItem("campaigns", JSON.stringify(state.campaigns));
    },
    setToken(state, action) {
      state.token = action.payload;
      localStorage.setItem("authToken", action.payload);
    },
  },
});

export const {
  loadCampaigns,
  addCampaign,
  editCampaign,
  removeCampaign,
  setToken,
} = campaignSlice.actions;

export default campaignSlice.reducer;
