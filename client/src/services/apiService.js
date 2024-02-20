import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL;

const apiService = axios.create({
  baseURL: apiUrl,
});

export const signIn = async (email, password) => {
  const check = apiUrl;
  try {
    return await apiService.post("/login", { email, password });
  } catch (error) {
    throw new Error("Failed to sign in");
  }
};
