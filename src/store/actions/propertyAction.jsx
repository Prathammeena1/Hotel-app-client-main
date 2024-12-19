import { toast } from "react-toastify"
import { fetchPropertiesFailure, fetchPropertiesStart, fetchPropertiesSuccess } from "../reducers/propertySlice"
import { searchPropertyService } from "../../api/propertyServices";

export const seacrhPropertiesAction = (query) => async (dispatch)=>{
    try {
        const data = await searchPropertyService(query);
        dispatch(fetchPropertiesStart());
        dispatch(fetchPropertiesSuccess(data));
    } catch (error) {
        toast.error(error.response.data.message);
        fetchPropertiesFailure(error.response.data.message)
    }
}
