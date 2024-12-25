import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { seacrhPropertiesAction } from "../../store/actions/propertyAction";

const Filter = ({ display, setDisplay }) => {

  const {register, handleSubmit} = useForm();
  const properties = useSelector(store => store.property.properties);
  const dispatch = useDispatch();

  const locations = properties.map(p => p.location);


  const onSubmit = (data)=>{
    const query = `?location=${data.location}&minPrice=${data.minPrice}&maxPrice=${data.maxPrice}`;
    dispatch(seacrhPropertiesAction(query));
    setDisplay(false);
  }


  if (!display) return null; // If display is false, do not render the component

  return (
    <div className="filterPage flex fixed z-[2] top-0 left-0 w-full bg-zinc-800/[.4] h-screen items-center justify-center ">
      <div className=" py-1 w-[35%] bg-zinc-50 rounded-xl ">
        <div className="w-full py-4 relative border-b border-[#dfdfdf]">
          <div className="absolute left-[3%] top-1/2 -translate-y-1/2">
            <i
              onClick={() => setDisplay(false)}
              className="ri-close-large-line text-zinc-800 cursor-pointer"
            ></i>
          </div>
          <h1 className="text-center font-bold text-lg text-zinc-800">
            Filters
          </h1>
        </div>

        <div className="pt-5 px-5 ">
          <div className="flex flex-col gap-4">
            <h1 className="text-lg font-bold">Location</h1>
            <select {...register("location")} className="border p-2 rounded-md w-full">
              <option disabled>Select Location</option>
              {locations.map((location,i)=><option key={i} value={location}>{location}</option>)}
            </select>
          </div>
          <div className="flex flex-col gap-4 my-7">
            <h1 className="text-lg font-bold">
              Price Range <span className="text-sm text-zinc-500">( INR )</span>
            </h1>
            <div className="flex gap-4">
              <input
                type="number"
                placeholder="Min"
                className="border p-2 rounded-md w-full"
                max="99999"
                min="0"
                {...register("minPrice")}
                />
              <input
                type="number"
                placeholder="Max"
                className="border p-2 rounded-md w-full"
                max="99999"
                min="0"
                {...register("maxPrice")}
                />
            </div>
            <button
            onClick={handleSubmit(onSubmit)}
              className="w-full text-center bg-[#b17f44] mt-4 text-white rounded-md py-3"
              type="submit"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
