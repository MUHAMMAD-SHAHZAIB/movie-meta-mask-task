import axios from "axios";

const BASE_URL = "https://staging.api.moviemint.net";

export const fetchDataFromApi = async (url) => {
  try {
    const { data } = await axios.get(BASE_URL + url);
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
