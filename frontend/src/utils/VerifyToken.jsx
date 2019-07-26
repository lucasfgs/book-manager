import axios from "axios";

export default async () => {
  const token = localStorage.getItem("token") || null;
  const API_URL = "http://localhost:4000/auth/verify";
  console.log(token);
  if (token) {
    try {
      return await axios.post(API_URL, {
        token
      });
    } catch {
      return false;
    }
  } else {
    return false;
  }
};
