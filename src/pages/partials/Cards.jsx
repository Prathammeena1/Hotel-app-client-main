import React from "react";
import { Link } from "react-router-dom";

const Cards = () => {


  const properties = [
    {
      id: 1,
      image: [

        "https://a0.muscache.com/im/pictures/miso/Hosting-654001690497595692/original/94605df9-10d9-4082-ad2d-3b11ec519386.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-654001690497595692/original/94605df9-10d9-4082-ad2d-3b11ec519386.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-654001690497595692/original/94605df9-10d9-4082-ad2d-3b11ec519386.jpeg?im_w=720",
      ], // Array of additional image links
      location: "Badowala, India",
      distance: "773 kilometres away",
      dates: "26 Nov – 1 Dec",
      price: "₹15,404 night",
    },
    {
      id: 2,
      image: [

        "https://a0.muscache.com/im/pictures/miso/Hosting-675108014847583143/original/a40ae4d9-6f8d-45d4-9994-5a004d31bcea.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-675108014847583143/original/a40ae4d9-6f8d-45d4-9994-5a004d31bcea.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-675108014847583143/original/a40ae4d9-6f8d-45d4-9994-5a004d31bcea.jpeg?im_w=720",
      ], // Array of additional image links
      location: "Anjar, India",
      distance: "755 kilometres away",
      dates: "17–22 Nov",
      price: "₹20,520 night",
    },
    {
      id: 3,
      image: [

        "https://a0.muscache.com/im/pictures/7f78dcb6-2e2c-4fa4-8efc-df2ce5053bfc.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/7f78dcb6-2e2c-4fa4-8efc-df2ce5053bfc.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/7f78dcb6-2e2c-4fa4-8efc-df2ce5053bfc.jpg?im_w=720",
      ], // Array of additional image links
      location: "Gurugram, India",
      distance: "566 kilometres away",
      dates: "24–29 Nov",
      price: "₹4,597 night",
      rating: 4.83,
    },
    {
      id: 4,
      image: [

        "https://a0.muscache.com/im/pictures/eab913c1-5f28-4d45-841b-0797378216e4.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/eab913c1-5f28-4d45-841b-0797378216e4.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/eab913c1-5f28-4d45-841b-0797378216e4.jpg?im_w=720",
      ], // Array of additional image links
      location: "New Delhi, India",
      distance: "580 kilometres away",
      dates: "24–29 Nov",
      price: "₹7,303 night",
      rating: 4.87,
    },
    {
      id: 5,
      image: [

        "https://a0.muscache.com/im/pictures/miso/Hosting-654001690497595692/original/94605df9-10d9-4082-ad2d-3b11ec519386.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-654001690497595692/original/94605df9-10d9-4082-ad2d-3b11ec519386.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-654001690497595692/original/94605df9-10d9-4082-ad2d-3b11ec519386.jpeg?im_w=720",
      ], // Array of additional image links
      location: "Badowala, India",
      distance: "773 kilometres away",
      dates: "26 Nov – 1 Dec",
      price: "₹15,404 night",
    },
    {
      id: 6,
      image: [

        "https://a0.muscache.com/im/pictures/miso/Hosting-675108014847583143/original/a40ae4d9-6f8d-45d4-9994-5a004d31bcea.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-675108014847583143/original/a40ae4d9-6f8d-45d4-9994-5a004d31bcea.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-675108014847583143/original/a40ae4d9-6f8d-45d4-9994-5a004d31bcea.jpeg?im_w=720",
      ], // Array of additional image links
      location: "Anjar, India",
      distance: "755 kilometres away",
      dates: "17–22 Nov",
      price: "₹20,520 night",
    },
    {
      id: 7,
      image: [

        "https://a0.muscache.com/im/pictures/7f78dcb6-2e2c-4fa4-8efc-df2ce5053bfc.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/7f78dcb6-2e2c-4fa4-8efc-df2ce5053bfc.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/7f78dcb6-2e2c-4fa4-8efc-df2ce5053bfc.jpg?im_w=720",
      ], // Array of additional image links
      location: "Gurugram, India",
      distance: "566 kilometres away",
      dates: "24–29 Nov",
      price: "₹4,597 night",
      rating: 4.83,
    },
    {
      id: 8,
      image: [

        "https://a0.muscache.com/im/pictures/eab913c1-5f28-4d45-841b-0797378216e4.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/eab913c1-5f28-4d45-841b-0797378216e4.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/eab913c1-5f28-4d45-841b-0797378216e4.jpg?im_w=720",
      ], // Array of additional image links
      location: "New Delhi, India",
      distance: "580 kilometres away",
      dates: "24–29 Nov",
      price: "₹7,303 night",
      rating: 4.87,
    },
    {
      id: 9,
      image: [

        "https://a0.muscache.com/im/pictures/miso/Hosting-654001690497595692/original/94605df9-10d9-4082-ad2d-3b11ec519386.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-654001690497595692/original/94605df9-10d9-4082-ad2d-3b11ec519386.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-654001690497595692/original/94605df9-10d9-4082-ad2d-3b11ec519386.jpeg?im_w=720",
      ], // Array of additional image links
      location: "Badowala, India",
      distance: "773 kilometres away",
      dates: "26 Nov – 1 Dec",
      price: "₹15,404 night",
    },
    {
      id: 10,
      image: [

        "https://a0.muscache.com/im/pictures/miso/Hosting-675108014847583143/original/a40ae4d9-6f8d-45d4-9994-5a004d31bcea.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-675108014847583143/original/a40ae4d9-6f8d-45d4-9994-5a004d31bcea.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-675108014847583143/original/a40ae4d9-6f8d-45d4-9994-5a004d31bcea.jpeg?im_w=720",
      ], // Array of additional image links
      location: "Anjar, India",
      distance: "755 kilometres away",
      dates: "17–22 Nov",
      price: "₹20,520 night",
    },
    {
      id: 11,
      image: [

        "https://a0.muscache.com/im/pictures/7f78dcb6-2e2c-4fa4-8efc-df2ce5053bfc.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/7f78dcb6-2e2c-4fa4-8efc-df2ce5053bfc.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/7f78dcb6-2e2c-4fa4-8efc-df2ce5053bfc.jpg?im_w=720",
      ], // Array of additional image links
      location: "Gurugram, India",
      distance: "566 kilometres away",
      dates: "24–29 Nov",
      price: "₹4,597 night",
      rating: 4.83,
    },
    {
      id: 12,
      image: [

        "https://a0.muscache.com/im/pictures/eab913c1-5f28-4d45-841b-0797378216e4.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/eab913c1-5f28-4d45-841b-0797378216e4.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/eab913c1-5f28-4d45-841b-0797378216e4.jpg?im_w=720",
      ], // Array of additional image links
      location: "New Delhi, India",
      distance: "580 kilometres away",
      dates: "24–29 Nov",
      price: "₹7,303 night",
      rating: 4.87,
    },
    {
      id: 13,
      image: [

        "https://a0.muscache.com/im/pictures/miso/Hosting-654001690497595692/original/94605df9-10d9-4082-ad2d-3b11ec519386.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-654001690497595692/original/94605df9-10d9-4082-ad2d-3b11ec519386.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-654001690497595692/original/94605df9-10d9-4082-ad2d-3b11ec519386.jpeg?im_w=720",
      ], // Array of additional image links
      location: "Badowala, India",
      distance: "773 kilometres away",
      dates: "26 Nov – 1 Dec",
      price: "₹15,404 night",
    },
    {
      id: 14,
      image: [

        "https://a0.muscache.com/im/pictures/miso/Hosting-675108014847583143/original/a40ae4d9-6f8d-45d4-9994-5a004d31bcea.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-675108014847583143/original/a40ae4d9-6f8d-45d4-9994-5a004d31bcea.jpeg?im_w=720",
        "https://a0.muscache.com/im/pictures/miso/Hosting-675108014847583143/original/a40ae4d9-6f8d-45d4-9994-5a004d31bcea.jpeg?im_w=720",
      ], // Array of additional image links
      location: "Anjar, India",
      distance: "755 kilometres away",
      dates: "17–22 Nov",
      price: "₹20,520 night",
    },
    {
      id: 15,
      image: [

        "https://a0.muscache.com/im/pictures/7f78dcb6-2e2c-4fa4-8efc-df2ce5053bfc.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/7f78dcb6-2e2c-4fa4-8efc-df2ce5053bfc.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/7f78dcb6-2e2c-4fa4-8efc-df2ce5053bfc.jpg?im_w=720",
      ], // Array of additional image links
      location: "Gurugram, India",
      distance: "566 kilometres away",
      dates: "24–29 Nov",
      price: "₹4,597 night",
      rating: 4.83,
    },
    {
      id: 16,
      image: [

        "https://a0.muscache.com/im/pictures/eab913c1-5f28-4d45-841b-0797378216e4.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/eab913c1-5f28-4d45-841b-0797378216e4.jpg?im_w=720",
        "https://a0.muscache.com/im/pictures/eab913c1-5f28-4d45-841b-0797378216e4.jpg?im_w=720",
      ], // Array of additional image links
      location: "New Delhi, India",
      distance: "580 kilometres away",
      dates: "24–29 Nov",
      price: "₹7,303 night",
      rating: 4.87,
    },
  ];

  return (
    <div className="w-full px-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
        {properties.map((property) => (
          <Link to={`/property/${property.id}`}
            key={property.id}
            className="border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition cursor-pointer"
          >
            <div className="w-full h-52 relative">
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <div className="w-full h-full flex items-center overflow-x-auto overflow-y-hidden no-scrollBar">
                  {property.image &&
                    property.image.map((image, index) => (
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
