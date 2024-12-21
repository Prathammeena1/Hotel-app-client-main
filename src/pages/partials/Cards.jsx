import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cards = () => {


  const properties = useSelector(store => store.property.properties)
  console.log(properties)

  return (
    <div className="w-full px-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
        {properties.map((property) => (
          <Link to={`/property/${property._id}`}
            key={property._id}
            className="border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition cursor-pointer"
          >
            <div className="w-full h-52 relative">
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <div className="w-full h-full flex items-center overflow-x-auto overflow-y-hidden no-scrollBar">
                  {property.images &&
                    property.images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={property.location}
                        className="w-full object-cover"
                      />
                    ))}
                </div>
              </div>
            </div>
            <div className="p-4">
              <h2 className="font-semibold text-lg">{property.location}</h2>
              <p className="text-gray-500 text-sm">{property.distance}</p>
              <p className="text-gray-500 text-sm">{property.dates}</p>
              <p className="text-black font-bold mt-2">{property.price}</p>
              {property.rating && (
                <p className="text-yellow-500 text-sm mt-1">
                  ⭐ {property.rating.toFixed(2)}
                </p>
              )}
            </div>
          </Link>
        ))}
      </div>

      <div className="explore-more w-full text-center my-12 space-y-2 ">
        <h2 className="font-bold text-lg text-zinc-900">
          Continue exploring farms
        </h2>
        <button className="bg-[#111] text-[#fff] py-3 px-5 font-bold rounded-lg">
          Show more
        </button>
      </div>
    </div>
  );
};

export default Cards;
