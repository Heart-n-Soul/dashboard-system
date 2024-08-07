import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  campaigns: [],
  token: localStorage.getItem("authToken") || [], // Store token here
};

// "name": "MTN Falaa promo ",
// "description": "hello world!",
// "start_date": "2024-07-25T11:31:59.349Z",
// "end_date": "2026-07-25T11:31:59.349Z",
// "banner_url": "https://www.google.com/imgres?q=abstract&imgurl=https%3A%2F%2Fd1ee3oaj5b5ueh.cloudfront.net%2Fthumbs%2F680xAUTO_original_article_2021_07_60ec4f1b5d566.jpeg&imgrefurl=https%3A%2F%2Fwww.riseart.com%2Fguide%2F2366%2Fguide-to-abstract-art&docid=5cTWbmpbu-DjEM&tbnid=VP_UpT2tvhEC5M&vet=12ahUKEwjLhf-uk8KHAxVzUUEAHRUsCx0QM3oECFYQAA..i&w=635&h=723&hcb=2&ved=2ahUKEwjLhf-uk8KHAxVzUUEAHRUsCx0QM3oECFYQAA",
// "status": "IN_PROGRESS"

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
