import axios from "axios";

const API_URL = "https://api.foursquare.com/v3/places/search";
const API_KEY = "YOUR_FOURSQUARE_API_KEY"; // Replace with your Foursquare API key

interface SearchParams {
  query?: string;
  ll?: string;
  radius?: number;
  categories?: string;
  chains?: string;
  exclude_chains?: string;
  exclude_all_chains?: boolean;
  fields?: string;
  min_price?: number;
  max_price?: number;
  open_at?: string;
  open_now?: boolean;
  ne?: string;
  sw?: string;
  near?: string;
  polygon?: string;
  sort?: "relevance" | "rating" | "distance";
  limit?: number;
  session_token?: string;
  super_venue_id?: string;
}

export const searchPlaces = async (params: SearchParams) => {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
      params,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching places:", error);
    throw error;
  }
};
