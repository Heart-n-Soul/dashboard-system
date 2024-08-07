// src/api.js

const BASE_URL = 'https://test.quups.app';

// Utility function to handle API requests
const fetchWithAuth = async (url, options = {}) => {
  const token = localStorage.getItem('authToken');
  
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const response = await fetch(url, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'An error occurred');
  }

  return response.json();
};

// SignIn API
// export const signIn = async (email, password) => {
//   return fetchWithAuth(`${BASE_URL}/api/signin`, {
//     method: 'POST',
//     body: JSON.stringify({ email, password }),
//   });
// };

export const signIn = async (email, password) => {
    try {
      const response = await fetch(`${BASE_URL}/api/signin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error response from server:', errorData);
        throw new Error(errorData.message || 'Login failed');
      }
  
      return response.json();
    } catch (error) {
      console.error('Sign-in error:', error.message);
      throw error;  // Re-throw the error to handle it in the calling function
    }
  };

// SignUp (Create Account) API
export const signUp = async (email, password) => {
  return fetchWithAuth(`${BASE_URL}/api/create-account`, {
    method: 'POST',
    body: JSON.stringify({ email, password, name: 'User Name' }),  // Add other necessary fields like `msisdn` if needed
  });
};

// Get All Campaigns API
export const getCampaigns = async () => {
  return fetchWithAuth(`${BASE_URL}/api/campaigns`);
};

// Create Campaign API

export const createCampaign = async (token, campaignData) => {
  const response = await fetch(`${BASE_URL}/api/campaigns`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
          name: campaignData.name,
          description: campaignData.description,
          start_date: campaignData.startDate, // ISO 8601 format
          end_date: campaignData.endDate, // ISO 8601 format
          banner_url: campaignData.bannerUrl,
          status: campaignData.status,
      }),
  });

  if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to create campaign');
  }

  return response.json();
};



// Update Campaign API

export const updateCampaign = async (token, id, campaignData) => {
  try {
    const response = await fetch(`${BASE_URL}/api/campaigns/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(campaignData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to update campaign');
    }

    return response.json();
  } catch (error) {
    console.error('Error updating campaign:', error);
    throw error;
  }
};


// Delete Campaign API
export const deleteCampaign = async (id) => {
  return fetchWithAuth(`${BASE_URL}/api/campaigns/${id}`, {
    method: 'DELETE',
  });
};


