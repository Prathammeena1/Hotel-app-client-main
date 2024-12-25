import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createPropertyService } from "../api/propertyServices";
import { toast } from "react-toastify";
import { Navigate, useNavigate } from "react-router-dom";

const CreateProperty = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();


  const onSubmit = async (data) => {
    // Convert images string to array separated by spaces
    const formatedData = {
      title: "Luxury Apartment in Downtown",
      description:
        "A spacious and modern 3-bedroom apartment located in the heart of the city. Features include a fully equipped kitchen, large balcony, and stunning city views.",
      location: "Karond, Bhopal",
      price: 2999,
      amenities: [
        "Gym",
        "Swimming Pool",
        "24/7 Security",
        "High-Speed Internet",
        "Parking",
      ],
      images: [
        "https://a0.muscache.com/im/pictures/1a284fe1-9332-412d-9635-4fefb3ca124d.jpg?im_w=720&im_format=avif",
        "https://a0.muscache.com/im/pictures/1a284fe1-9332-412d-9635-4fefb3ca124d.jpg?im_w=720&im_format=avif",
        "https://a0.muscache.com/im/pictures/d8d629d7-9307-4b24-a8ae-b01d95e36124.jpg?im_w=1200&im_format=avif",
        "https://a0.muscache.com/im/pictures/d8d629d7-9307-4b24-a8ae-b01d95e36124.jpg?im_w=1200&im_format=avif",
        "https://a0.muscache.com/im/pictures/1a284fe1-9332-412d-9635-4fefb3ca124d.jpg?im_w=720&im_format=avif",
        "https://a0.muscache.com/im/pictures/d8d629d7-9307-4b24-a8ae-b01d95e36124.jpg?im_w=1200&im_format=avif",
      ],
    };

    try {
      const res = await createPropertyService(formatedData);
      if (Object.keys(res).length > 0) {
        toast.success(res.message);
        navigate("/");
      }
    } catch (error) {
      toast.error("Error creating property");
    }

    console.log(res);
  };

  return (
    <div className="loginPage flex z-[2] top-0 left-0 w-full bg-zinc-100 h-screen items-center justify-center ">
      <div className=" py-1 w-[35%] bg-zinc-50 rounded-xl shadow-xl ">
        <div className="w-full py-4 relative">
          <div className="absolute left-[3%] top-1/2 -translate-y-1/2"></div>
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
                {errors.title && (
                  <p className="absolute bottom-0 left-[3%] w-full text-[red] text-xs ">
                    {" "}
                    <i className="ri-information-fill text-[red]"></i>{" "}
                    {errors.title.message}
                  </p>
                )}
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
                {errors.description && (
                  <p className="absolute bottom-0 left-[3%] w-full text-[red] text-xs ">
                    {" "}
                    <i className="ri-information-fill text-[red]"></i>{" "}
                    {errors.description.message}
                  </p>
                )}
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
                {errors.location && (
                  <p className="absolute bottom-0 left-[3%] w-full text-[red] text-xs ">
                    {" "}
                    <i className="ri-information-fill text-[red]"></i>{" "}
                    {errors.location.message}
                  </p>
                )}
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
                {errors.price && (
                  <p className="absolute bottom-0 left-[3%] w-full text-[red] text-xs ">
                    {" "}
                    <i className="ri-information-fill text-[red]"></i>{" "}
                    {errors.price.message}
                  </p>
                )}
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
                {errors.amenities && (
                  <p className="absolute bottom-0 left-[3%] w-full text-[red] text-xs ">
                    {" "}
                    <i className="ri-information-fill text-[red]"></i>{" "}
                    {errors.amenities.message}
                  </p>
                )}
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
                      message: "Invalid image URL",
                    },
                  })}
                />
                {errors.images && (
                  <p className="absolute bottom-0 left-[3%] w-full text-[red] text-xs ">
                    {" "}
                    <i className="ri-information-fill text-[red]"></i>{" "}
                    {errors.images.message}
                  </p>
                )}
              </div>
            </div>
            <button
              className="w-full text-center bg-[#b17f44] mt-4 text-white rounded-md py-3"
              type="submit"
            >
              Create Property
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateProperty;
