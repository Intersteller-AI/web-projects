import axios from "axios";

export const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    "X-RapidAPI-Key": "596fc91dc5mshc53faa00e7b0b4cp1220c5jsn3f6abffe4ddb",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};

// 596fc91dc5mshc53faa00e7b0b4cp1220c5jsn3f6abffe4ddb

// 96e595579emshf5f6cbce91aa72ep1b82e4jsn039c814b9942

// cf5a017e2cmsh296174026c3403ep18c3ecjsn8839a5e5889f