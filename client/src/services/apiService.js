import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL;

const apiService = axios.create({
  baseURL: apiUrl,
});

export const signIn = async (email, password) => {
  try {
    const res = await apiService.post("/signIn", { email, password });
    return res.data;
  } catch (error) {}
};

export const verifyLoggedInUser = async (token) => {
  try {
    const response = await apiService.post("/", { token });
    return response.data.status;
  } catch (error) {}
};

export const getAllDevotees = async (email, password) => {
  try {
    debugger;
    const response = await apiService.get("/getAllDevotees");
    return response.data;
  } catch (error) {
    return true;
  }
};

export const addDevotee = async (devoteeData) => {
  try {
    const response = await apiService.post("/addDevotee", devoteeData);
    return response.data;
  } catch (error) {}
};
