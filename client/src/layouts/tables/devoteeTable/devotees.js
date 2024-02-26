import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
export default function Devotees() {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);

  useEffect(() => {
    const verfiyCookie = async () => {
      if (!cookies.token) {
        navigate("/pages/authentication/sign-in");
      }
      const API_BASE_URL = process.env.REACT_APP_API_URL;

      const { data } = await axios.post(
        `${API_BASE_URL}`,
        {},
        { withCredentials: true }
      );

      const { success } = data;

      return success ? null : (removeCookie("token"), navigate("/signIn"));
    };

    verfiyCookie();
  }, [cookies, navigate, removeCookie]);

  return;
}
