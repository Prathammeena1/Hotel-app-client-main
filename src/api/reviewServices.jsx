import axios from "./axiosConfig.jsx";
import { toast } from "react-toastify";


export const addReview = async (reviewData) =>{
    try {
        const {data} = await axios.post('/review',reviewData);
        return data;
    } catch (error) {
        toast.error(error.response.data.message)
    }
}

export const updateReview = async (reviewData,id) =>{
    try {
        const {data} = await axios.put(`/reviews/${id}`,reviewData);
        return data;
    } catch (error) {
        toast.error(error.response.data.message);
    }
}


export const deleteReview = async (id) =>{
    try {
        const {data} = await axios.delete(`/reviews/${id}`);
        return data;
    } catch (error) {
        toast.error(error.response.data.message);
    }
}


export const viewReviews = async (propertyId)=>{
    try {
        const {data} = await axios.get(`/reviews/${propertyId}`);
        return data;
    } catch (error) {
        toast.error(error.response.data.message);
    }
} 

