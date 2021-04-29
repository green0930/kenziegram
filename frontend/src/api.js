import axios from "axios";
export const API_BASE_URL = "http://localhost:4000";

export const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

export const fetchPics = async () => {
  const { data } = await axiosInstance.get("/photos");
  return data;
};

export const uploadPhoto = async (data) => {
  const formData = new FormData();

  
  formData.append("photo", data);
  let result = await axiosInstance.post("/photos", formData);
  return result;
};
export const getPhotos = async () => {
  const photos = await axiosInstance.get("/photos");
  return photos;
};