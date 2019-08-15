import api from "../services/api";

export default async () => {
  const token = localStorage.getItem("token") || null;
  const API_URL = "auth/verify";
  if (token) {
    try {
      return await api.post(API_URL, {
        token
      });
    } catch {
      return false;
    }
  } else {
    return false;
  }
};
