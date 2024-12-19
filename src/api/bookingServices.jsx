import { toast } from "react-toastify";
import axios from "./axiosConfig.jsx";


export const createBookingService = async(bookingData) =>{
    try {
        const {data} = await axios.post("/bookings", bookingData);
        return data;
    } catch (error) {
        toast.error(error.response.data.message)
    }
}

export const viewUserBookingService = async(userId)=>{
    try {
        const {data} = await axios.get(`/bookings/user/${userId}`);
        return data;
    } catch (error) {
        toast.error(error.response.data.message)
    }
}

export const cancelBookingService = async(bookingId)=>{
    try {
        const {data} = await axios.delete(`/bookings/${bookingId}`);
        return data;
    } catch (error) {
        toast.error(error.response.data.message);
    }
}
