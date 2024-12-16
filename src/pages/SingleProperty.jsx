import React, { useState } from "react";
import Footer from "./partials/Footer";
import BookingCard from "./partials/BookingCard";

const SingleProperty = () => {
  const property = {
    id: 1,
    image: [
      "https://i.pinimg.com/736x/c8/52/e7/c852e7f580e8ee2d0eb435789ce9e823.jpg",
      "https://i.pinimg.com/736x/24/f5/03/24f5037ef51f9d4afe2c28a346182f74.jpg",
      "https://i.pinimg.com/736x/84/f8/bc/84f8bc7c40315e0ee91c51e01475ef9b.jpg",
      "https://i.pinimg.com/736x/b0/de/4f/b0de4fb67e86cc5d4d5b109b22c4dc30.jpg",
      "https://i.pinimg.com/736x/95/71/cc/9571cc55dcb22399c5128ce943419a35.jpg",
    ], // Array of additional image links
    location: "Badowala, India",
    distance: "773 kilometres away",
    dates: "26 Nov – 1 Dec",
    price: "₹15,404 night",
    avaerageRating: 4.5,
    totalReview: 10,
    description:
      "Experience the serenity of Badowala in this cozy retreat. Enjoy the breathtaking views of the surrounding hills and indulge in the local cuisine.",
    amenities: [
      "Free Wi-Fi",
      "Private Parking",
      "Air Conditioning",
      "Flat-screen TV",
      "Kitchen",
      "Microwave",
      "Refrigerator",
      "Toaster",
      "Washing Machine",
      "Dryer",
      "Iron",
      "Ironing Board",
      "Hairdryer",
      "Toiletries",
      "Towels",
      "Bed Linen",
      "Cleaning Products",
      "Fire Extinguisher",
      "First Aid Kit",
      "Smoke Detector",
      "Carbon Monoxide Detector",
    ], // Array of amenities available
  };

  const ratings = [
    { label: "Cleanliness", value: "5.0", icon: "ri-sparkling-line" },
    { label: "Accuracy", value: "5.0", icon: "ri-checkbox-circle-line" },
    { label: "Check-in", value: "5.0", icon: "ri-key-line" },
    { label: "Communication", value: "4.9", icon: "ri-chat-4-line" },
    { label: "Location", value: "5.0", icon: "ri-map-pin-line" },
    { label: "Value", value: "4.9", icon: "ri-price-tag-3-line" },
  ];


  const [nightRate] = useState(1000); // ₹38,361
  const [cleaningFee] = useState(100); // ₹8,048


  const reviews = [
    {
      name: "Dennis",
      image: "https://via.placeholder.com/48",
      timeOnAirbnb: 10,
      date: "October 2024",
      comment:
        "The architecture, interior design and attention to detail are convincing. You'll feel like you're in a different world from the first minute.",
    },
    {
      name: "Steve Raymond",
      image: "https://via.placeholder.com/48",
      timeOnAirbnb: 3,
      date: "April 2024",
      comment:
        "The house is very original, Jan Henrik is a passionate architect, the level of research and detail of this house is impressive, nothing was left to chance in this house.",
    },
    {
      name: "Dennis",
      image: "https://via.placeholder.com/48",
      timeOnAirbnb: 10,
      date: "October 2024",
      comment:
        "The architecture, interior design and attention to detail are convincing. You'll feel like you're in a different world from the first minute.",
    },
    {
      name: "Steve Raymond",
      image: "https://via.placeholder.com/48",
      timeOnAirbnb: 3,
      date: "April 2024",
      comment:
        "The house is very original, Jan Henrik is a passionate architect, the level of research and detail of this house is impressive, nothing was left to chance in this house.",
    },
    {
      name: "Dennis",
      image: "https://via.placeholder.com/48",
      timeOnAirbnb: 10,
      date: "October 2024",
      comment:
        "The architecture, interior design and attention to detail are convincing. You'll feel like you're in a different world from the first minute.",
    },
    {
      name: "Steve Raymond",
      image: "https://via.placeholder.com/48",
      timeOnAirbnb: 3,
      date: "April 2024",
      comment:
        "The house is very original, Jan Henrik is a passionate architect, the level of research and detail of this house is impressive, nothing was left to chance in this house.",
    },
    {
      name: "Dennis",
      image: "https://via.placeholder.com/48",
      timeOnAirbnb: 10,
      date: "October 2024",
      comment:
        "The architecture, interior design and attention to detail are convincing. You'll feel like you're in a different world from the first minute.",
    },
    {
      name: "Steve Raymond",
      image: "https://via.placeholder.com/48",
      timeOnAirbnb: 3,
      date: "April 2024",
      comment:
        "The house is very original, Jan Henrik is a passionate architect, the level of research and detail of this house is impressive, nothing was left to chance in this house.",
    },
    {
      name: "Dennis",
      image: "https://via.placeholder.com/48",
      timeOnAirbnb: 10,
      date: "October 2024",
      comment:
        "The architecture, interior design and attention to detail are convincing. You'll feel like you're in a different world from the first minute.",
    },
    {
      name: "Steve Raymond",
      image: "https://via.placeholder.com/48",
      timeOnAirbnb: 3,
      date: "April 2024",
      comment:
        "The house is very original, Jan Henrik is a passionate architect, the level of research and detail of this house is impressive, nothing was left to chance in this house.",
    },
  ];

  return (
    <>
      <div className="h-full w-full bg-zinc-50 pt-28 px-40">
        <div className="flex w-full gap-2 h-[60vh] rounded-2xl overflow-hidden">
          <div className="w-1/2 h-full  relative">
            <div className="w-full h-full absolute top-0 left-0  hover:bg-black/[.2] cursor-pointer duration-[.2s] "></div>
            <img
              src={property.image[0]}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-1/2 h-full flex flex-col gap-2">
            <div className="w-full h-1/2 flex gap-2 ">
              <div className="w-1/2 h-full relative">
                <div className="w-full h-full absolute top-0 left-0  hover:bg-black/[.2] cursor-pointer duration-[.2s] "></div>
                <img
                  src={property.image[1]}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-1/2 h-full relative">
                <div className="w-full h-full absolute top-0 left-0  hover:bg-black/[.2] cursor-pointer duration-[.2s] "></div>
                <img
                  src={property.image[2]}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-full h-1/2 flex gap-2 ">
              <div className="w-1/2 h-full relative">
                <div className="w-full h-full absolute top-0 left-0  hover:bg-black/[.2] cursor-pointer duration-[.2s] "></div>
                <img
                  src={property.image[3]}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-1/2 h-full relative">
                <div className="w-full h-full absolute top-0 left-0  hover:bg-black/[.2] cursor-pointer duration-[.2s] "></div>
                <img
                  src={property.image[4]}
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
                <h1 className="text-3xl text-black ">{property.location}</h1>
                <h1 className="text-lg">{property.distance}</h1>
              </div>
              <div className="my-6 h-full w-[20%] flex items-center justify-between ">
                <div>
                  <h3 className="flex relative">
                    <i className="ri-star-fill text-5xl text-[#b17f44]"></i>
                    <p className="absolute text-xs font-bold text-zinc-200 top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2">
                      {property.avaerageRating}
                    </p>
                  </h3>
                </div>
                <div className="h-[40px] bg-zinc-300 w-[1px] "></div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-black">
                    {property.totalReview}
                  </h3>
                  <p className="text-xs underline">Reviews</p>
                </div>
              </div>
            </div>

            <div>{property.description}</div>

            <div className="amenities w-full mt-2">
              <h1 className="text-2xl text-black ">What this place offers</h1>
              <div className="grid grid-cols-2 gap-4 p-4 text-md">
                {property.amenities.slice(0, 10).map((amenity, index) => (
                  <h4 key={index} className="col-span-1 text-zinc-800">
                    ~ {amenity}
                  </h4>
                ))}
                {property.amenities.length > 10 ? (
                  <button
                    className="text-center mt-4 text-zinc-800 border-zinc-800 border rounded-md py-3"
                    type="submit"
                  >
                    Show all {property.amenities.length} amenities
                  </button>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>

          <div className="w-fit mb-4">
          <BookingCard nightRate={nightRate} />
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
            {property.avaerageRating}
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
        {reviews.slice(0, 6).map((review, index) => (
          <div key={index} className="mb-6">
            <div className="flex items-center mb-2">
              <img
                src={review.image}
                alt={review.name}
                className="w-12 h-12 rounded-full mr-3"
              />
              <div>
                <h3 className="font-semibold">{review.name}</h3>
                <p className="text-sm text-gray-500">
                  {review.timeOnAirbnb} years on Airbnb
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-500 mb-1">
              ⭐️⭐️⭐️⭐️⭐️ {review.date} - Stayed a few nights
            </p>
            <p className="text-gray-700">{review.comment}</p>
          </div>
        ))}
        {reviews.length > 6 ? (
          <button
            className="text-center text-zinc-800 font-bold border-zinc-800 border rounded-md py-3 w-fit px-10 "
            type="submit"
          >
            Show all {reviews.length} reviews
          </button>
        ) : (
          ""
        )}
      </div>
    </div>

    </div>

    <Footer/>
    </>

  );
};

export default SingleProperty;
