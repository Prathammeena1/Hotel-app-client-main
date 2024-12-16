import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

const CreateProperty = () => {
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        // Convert images string to array separated by spaces
        data.images = data.images.split(' ');
        data.amenities = data.amenities.split(' ');

        console.log(data)
        // dispatch(asyncCreateProperty(data));
    };


    return (

        <div className="loginPage flex z-[2] top-0 left-0 w-full bg-zinc-100 h-screen items-center justify-center ">
        <div className=" py-1 w-[35%] bg-zinc-50 rounded-xl shadow-xl ">
          <div className="w-full py-4 relative">
            <div className="absolute left-[3%] top-1/2 -translate-y-1/2">
            </div>
            <h1 className="text-center font-bold text-lg text-zinc-800">
              Create Property
            </h1>
          </div>

          <div className="py-5 px-5 ">
            
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full border border-zinc-500 rounded-lg">
            <div className="w-full p-4 text-md relative  flex justify-center items-center gap-3 border-b border-zinc-500">
                <label>Title:</label>
                <input
                className="w-full h-full focus:outline-none text-xl "
                    type="text"
                    {...register("title", { required: "Title is required" })}
                />
                {errors.title && <p className="absolute bottom-0 left-[3%] w-full text-[red] text-xs "> <i className="ri-information-fill text-[red]"></i> {errors.title.message}</p>}
            </div>
            <div className="p-4 text-md relative w-full flex justify-center items-center gap-3  border-b border-zinc-500">
                <label>Description:</label>
                <input
                className="w-full h-full focus:outline-none text-xl "
                    type="text"
                    {...register("description", {
                        required: "Description is required",
                    })}
                />
                  {errors.description && <p className="absolute bottom-0 left-[3%] w-full text-[red] text-xs "> <i className="ri-information-fill text-[red]"></i> {errors.description.message}</p>}
            </div>
            <div className="p-4 text-md relative w-full flex justify-center items-center gap-3  border-b border-zinc-500">
                <label>Location:</label>
                <input
                className="w-full h-full focus:outline-none text-xl "
                    type="text"
                    {...register("location", {
                        required: "Location is required",
                    })}
                />
                  {errors.location && <p className="absolute bottom-0 left-[3%] w-full text-[red] text-xs "> <i className="ri-information-fill text-[red]"></i> {errors.location.message}</p>}
            </div>
            <div className="p-4 text-md relative w-full flex justify-center items-center gap-3  border-b border-zinc-500">
                <label>Price (INR per night):</label>
                <input
                className="w-[65%] h-full focus:outline-none text-xl "
                    type="number"
                    {...register("price", {
                        required: "Price is required",
                    })}
                />
                  {errors.price && <p className="absolute bottom-0 left-[3%] w-full text-[red] text-xs "> <i className="ri-information-fill text-[red]"></i> {errors.price.message}</p>}
            </div>
            <div className="p-4 text-md relative w-full flex justify-center items-center gap-3  border-b border-zinc-500">
                <label>Amenities:</label>
                <input
                className="w-full h-full focus:outline-none text-xl "
                    type="text"
                    {...register("amenities", {
                        required: "Amenities are required",
                    })}
                />
                  {errors.amenities && <p className="absolute bottom-0 left-[3%] w-full text-[red] text-xs "> <i className="ri-information-fill text-[red]"></i> {errors.amenities.message}</p>}
            </div>
            <div className="p-4 text-md relative w-full flex justify-center items-center gap-3 ">
                <label>Images:</label>
                <input
                className="w-full h-full focus:outline-none text-xl "
                    type="url"
                    {...register("images", {
                        required: "Images are required",
                        pattern: {
                            value: /(^\s*(https?:\/\/.*)\s*$)/i,
                            message: "Invalid image URL"
                        }
                    })}
                />
                  {errors.images && <p className="absolute bottom-0 left-[3%] w-full text-[red] text-xs "> <i className="ri-information-fill text-[red]"></i> {errors.images.message}</p>}
            </div>
            
            </div>
            <button className="w-full text-center bg-[#b17f44] mt-4 text-white rounded-md py-3" type="submit">Create Property</button>
        </form>
          </div>
        </div>
        
      </div>

       
    );
};

export default CreateProperty;
