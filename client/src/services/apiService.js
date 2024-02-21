import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL;

const apiService = axios.create({
  baseURL: apiUrl,
});

export const signIn = async (email, password) => {
  try {
    return await apiService.post("/signIn", { email, password });
  } catch (error) {}
};

export const getAllDevotees = async (email, password) => {
  try {
    debugger
    const response = await apiService.get("/getAllDevotees");
    return response.data;
  } catch (error) {
    return true;
  }
};
