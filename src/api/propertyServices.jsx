import { toast } from "react-toastify";
import axios from "./axiosConfig.jsx";

export const createPropertyService = async (propertyData) => {
  try {
    const { data } = await axios.post("/properties/", propertyData);
    return data;
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

export const updatePropertyService = async (propertyData) => {
  try {
    const { data } = await axios.put(
      `/properties/${propertyData._id}`,
      propertyData
    );
    return data;
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

export const deletePropertyService = async (propertyId) => {
  try {
    const { data } = await axios.delete(`/properties/${propertyId}`);
    return data;
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

export const searchPropertyService = async (query) => {
  try {
    const { data } = await axios.get(`/properties/search${query}`);
    return data;
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

export const viewPropertyService = async (id) => {
  try {
    const { data } = await axios.get(`/properties/${id}`);
    console.log(data);
    
    return data;
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

export const viewMyPropertyService = async () => {
  try {
    const { data } = await axios.get(`/properties/me`);
    return data;
  } catch (error) {
    toast.error(error.response.data.message);
  }
};
