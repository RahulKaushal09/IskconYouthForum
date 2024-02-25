import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_URL;

export async function signIn(email, password) {
  try {
    const response = await axios.post(`${API_BASE_URL}/signin`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    return false;
  }
}
