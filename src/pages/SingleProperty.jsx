import React, { useEffect, useState } from "react";
import Footer from "./partials/Footer";
import BookingCard from "./partials/BookingCard";
import { useParams } from "react-router-dom";
import { viewPropertyService } from "../api/propertyServices";
import { viewReviews } from "../api/reviewServices";
import { useForm } from "react-hook-form";

const SingleProperty = () => {

  const {id} = useParams();
  const [propertyData, setPropertyData] = useState(null);
  const [reviewsData, setreviewsData] = useState(null);
  const [avgRating, setavgRating] = useState(0);

  const {register,handleSubmit,formState:{errors},getValues} = useForm();
  

  const getproperty = async (id)=>{
    const property = await viewPropertyService(id);
    console.log(property);
    setPropertyData(property)
  }

  const getreviews = async (id)=>{
    const res = await viewReviews(id)
    setreviewsData(res)
    res.length >0  && setavgRating(calculateAvgRating(res.map(r => r.rating)));
  }


  useEffect(()=>{
    getproperty(id);
    getreviews(id);
  },[id])

  const ratings = [
    { label: "Cleanliness", value: "5.0", icon: "ri-sparkling-line" },
    { label: "Accuracy", value: "5.0", icon: "ri-checkbox-circle-line" },
    { label: "Check-in", value: "5.0", icon: "ri-key-line" },
    { label: "Communication", value: "4.9", icon: "ri-chat-4-line" },
    { label: "Location", value: "5.0", icon: "ri-map-pin-line" },
    { label: "Value", value: "4.9", icon: "ri-price-tag-3-line" },
  ];

  return propertyData && (
    <>
      <div className="h-full w-full bg-zinc-50 pt-28 px-40">
        <div className="flex w-full gap-2 h-[60vh] rounded-2xl overflow-hidden">
          <div className="w-1/2 h-full  relative">
            <div className="w-full h-full absolute top-0 left-0  hover:bg-black/[.2] cursor-pointer duration-[.2s] "></div>
            <img
              src={propertyData.images[0]}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-1/2 h-full flex flex-col gap-2">
            <div className="w-full h-1/2 flex gap-2 ">
              <div className="w-1/2 h-full relative">
                <div className="w-full h-full absolute top-0 left-0  hover:bg-black/[.2] cursor-pointer duration-[.2s] "></div>
                <img
                  src={propertyData.images[1]}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-1/2 h-full relative">
                <div className="w-full h-full absolute top-0 left-0  hover:bg-black/[.2] cursor-pointer duration-[.2s] "></div>
                <img
                  src={propertyData.images[2]}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-full h-1/2 flex gap-2 ">
              <div className="w-1/2 h-full relative">
                <div className="w-full h-full absolute top-0 left-0  hover:bg-black/[.2] cursor-pointer duration-[.2s] "></div>
                <img
                  src={propertyData.images[3]}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-1/2 h-full relative">
                <div className="w-full h-full absolute top-0 left-0  hover:bg-black/[.2] cursor-pointer duration-[.2s] "></div>
                <img
                  src={propertyData.images[4]}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between w-full px-2 items-end mb-4">
          <div className="w-[50%]">
            <div className="flex justify-between items-center w-full ">
              <div className="my-6">
                <h1 className="text-3xl text-black ">{propertyData.location}</h1>
              </div>
              <div className="my-6 h-full w-[20%] flex items-center justify-between ">
                <div>
                  <h3 className="flex relative">
                    <i className="ri-star-fill text-5xl text-[#b17f44]"></i>
                    <p className="absolute text-xs font-bold text-zinc-200 top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2">
                      {avgRating}
                    </p>
                  </h3>
                </div>
                <div className="h-[40px] bg-zinc-300 w-[1px] "></div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-black">
                    {propertyData.totalReview}
                  </h3>
                  <p className="text-xs underline">Reviews</p>
                </div>
              </div>
            </div>

            <div>{propertyData.description}</div>

            <div className="amenities w-full mt-2">
              <h1 className="text-2xl text-black ">What this place offers</h1>
              <div className="grid grid-cols-2 gap-4 p-4 text-md">
                {propertyData.amenities.slice(0, 10).map((amenity, index) => (
                  <h4 key={index} className="col-span-1 text-zinc-800">
                    ~ {amenity}
                  </h4>
                ))}
                {propertyData.amenities.length > 10 ? (
                  <button
                    className="text-center mt-4 text-zinc-800 border-zinc-800 border rounded-md py-3"
                    type="submit"
                  >
                    Show all {propertyData.amenities.length} amenities
                  </button>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>

          <div className="w-fit mb-4">
          <BookingCard property={propertyData} />
          </div>
        </div>

        <div className=" mx-auto py-4  relative">
      {/* Overall Rating */}
      <div className="text-center mb-8">
        <div className="flex items-start justify-center">
          <img
            className="h-32"
            src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-GuestFavorite/original/78b7687c-5acf-4ef8-a5ea-eda732ae3b2f.png"
            alt=""
          />
          <h1 className="text-8xl text-zinc-800 font-bold">
            {avgRating}
          </h1>
          <img
            className="h-32"
            src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-GuestFavorite/original/b4005b30-79ff-4287-860c-67829ecd7412.png"
            alt=""
          />
        </div>
        <p className="text-2xl text-zinc-800 font-bold ">Guest favourite</p>
        <p className="text-gray-600 text-lg w-[30%] text-center mx-auto">
          One of the most loved homes on Airbnb based on ratings, reviews and
          reliability
        </p>
      </div>

      {/* Rating Metrics */}
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 mb-8">
        {ratings.map((rating) => (
          <div key={rating.label} className="text-center">
            <p className="text-xl font-semibold">{rating.value}</p>
            <div className="flex justify-center items-center mt-1">
              <i className={`${rating.icon} text-2xl`} />
            </div>
            <p className="text-gray-500 text-sm">{rating.label}</p>
          </div>
        ))}
      </div>

      {/* Reviews */}
      <div className="border-t pt-6 grid grid-cols-2 gap-4">
            {reviewsData.slice(0, 6).map((review, index) => (
              <div key={index} className="mb-6">
                <div className="flex items-center mb-2">
                  <div className="flex gap-3 items-center">
                    <h3 className="font-semibold text-2xl">{review.user.username}</h3>
                    <p className="text-sm text-gray-500">
                      {calculateDuration(review.user.createdAt)} on Airbnb
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mb-1">
                  {[...Array(review.rating)].map((_, index) => (
                    <span key={index}>⭐️</span>
                  ))} {calculateDuration(review.createdAt)} ago - Stayed a few nights
                </p>
                <p className="text-gray-700">{review.comment}</p>
              </div>
            ))}
            {reviewsData.length > 6 ? (
              <button
                className="text-center text-zinc-800 font-bold border-zinc-800 border rounded-md py-3 w-fit px-10 "
                type="submit"
              >
                Show all {reviewsData.length} reviews
              </button>
            ) : (
              ""
            )}
      </div>


      {/* Add review */}
      <div className="w-full py-4 flex flex-col items-start gap-4">
            <form >
              <div className="flex items-center gap-5">
                <div className="flex items-center gap-2 flex-col">
                  <div>
                    {[...Array(5)].map((_, index) => (
                      <label key={index} className="cursor-pointer" onClick={() => setNewReview({ ...newReview, rating: index + 1 })}>
                        <input {...register("rating", { required: true })} type="radio" name="rating" value={index + 1} className="sr-only" />
                        <span className={`text-xl ${index + 1 <= getValues("rating") ? "text-yellow-500" : "text-gray-500 grayscale"}`}>⭐️</span>
                      </label>
                    ))}
                  </div>
                  {errors.rating && <p className="text-red-500 text-xs mt-[-10px]">Please select a rating</p>}
                </div>
                <div>
                  <input {...register("comment", { required: true })} type="text" name="comment" className="focus:outline-none w-[20vw] py-2 bg-zinc-50" placeholder="Enter the comment" />
                  {errors.comment && <p className="text-red-500 text-xs mt-[-10px]">Please select a rating</p>}
                </div>
              </div>
            </form>

            <button className="bg-[#b17f44] text-white font-bold py-2 px-4 rounded-lg mb-4" type="submit" >
              Add your reviews
            </button>
          </div>


    </div>

    </div>

    <Footer/>
    </>

  );
};

export default SingleProperty;
