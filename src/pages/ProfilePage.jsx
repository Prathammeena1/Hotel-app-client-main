import React, { useEffect, useState } from "react";
import Cards from "./partials/Cards";
import { Link, useFetcher } from "react-router-dom";
import { useSelector } from "react-redux";
import { deletePropertyService, viewMyPropertyService } from "../api/propertyServices";
import { viewUserBookingService } from "../api/bookingServices";
import { toast } from "react-toastify";
import { calculateDuration } from "../utils/Math";

const ProfilePage = () => {

  const {user} = useSelector(store => store.user);
  const [bookingsData, setbookingsData] = useState([]);
  const [propertiesData, setpropertiesData] = useState([]);


  const loadProperty = async()=>{
    const res = await viewMyPropertyService();
    setpropertiesData(res);
  }
  const loadBooking = async()=>{
    const res = await viewUserBookingService();
    setbookingsData(res);
  }

  console.log(propertiesData);
  

  useEffect(()=>{
    if(user){
      loadProperty();
      loadBooking();
    }
  },[user])

  const bookings = [
    {
      id: 1,
      property: "Property1",
      user: "User1",
      checkInDate: "2022-11-26",
      checkOutDate: "2022-12-01",
      totalPrice: 15404,
      status: "Confirmed",
      razorpayOrderId: "order_123",
      paymentDetails: {
        paymentId: "payment_123",
        orderId: "order_123",
        signature: "signature_123",
      },
    },
    {
      id: 2,
      property: "Property2",
      user: "User2",
      checkInDate: "2022-11-17",
      checkOutDate: "2022-11-22",
      totalPrice: 20520,
      status: "Pending",
      razorpayOrderId: "order_456",
      paymentDetails: {
        paymentId: "payment_456",
        orderId: "order_456",
        signature: "signature_456",
      },
    },
    {
      id: 3,
      property: "Property3",
      user: "User3",
      checkInDate: "2022-11-24",
      checkOutDate: "2022-11-29",
      totalPrice: 4597,
      status: "Cancelled",
      razorpayOrderId: "order_789",
      paymentDetails: {
        paymentId: "payment_789",
        orderId: "order_789",
        signature: "signature_789",
      },
    },
    {
      id: 4,
      property: "Property4",
      user: "User4",
      checkInDate: "2022-11-24",
      checkOutDate: "2022-11-29",
      totalPrice: 7303,
      status: "Confirmed",
      razorpayOrderId: "order_101",
      paymentDetails: {
        paymentId: "payment_101",
        orderId: "order_101",
        signature: "signature_101",
      },
    },
  ];

  const deleteHandler = async (id) => {
    const res = await deletePropertyService(id)
    res?.message && toast.success(res.message)
    loadProperty();
  };

  const bookingCancelHandler = (id) => {
    console.log(`Cancelled ${id} Booking`);
  };


  const formateDate = (data)=>{
    const d = new Date(data);
    return `${d.getDate()} ${d.toLocaleString('default', { month: 'short' })} ${d.getFullYear()}`;
  }



  return user ? (
    <div className="h-full w-full pt-28 px-20 bg-zinc-50">
      <div className="flex h-full relative w-full gap-8">
        <div className="w-[30vw] p-6 py-10 sticky top-[16vh] bg-white rounded-3xl h-fit shadow-[0px_0px_30px_2px_#e4e4e7] flex justify-between items-center">
          {/* Profile Circle */}
          <div>
            <div className="flex items-center justify-center w-24 h-24 bg-black text-white text-5xl font-bold rounded-full mx-auto">
              {user?.username[0].toUpperCase()}
            </div>
            {/* Name and Role */}
            <div className="text-center mt-4">
              <h2 className="text-4xl text-black font-semibold">{user?.username}</h2>
              <p className="text-gray-500 text-sm">{user.isAdmin ? "Admin" : "Guest"}</p>
            </div>
          </div>
          {/* Month Info */}
          <div className="">
            <p className="text-lg font-bold">{calculateDuration(user.createdAt)}</p>
            <p className="text-gray-500 text-xs">on Airbnb</p>
          </div>
        </div>

        <div className=" w-full pt-2">
          <h1 className="text-3xl font-bold mb-4">My properties</h1>
          <div className="grid grid-cols-4 gap-6">
            {propertiesData.length > 0 ? propertiesData.map((property) => (
              <div
                key={property._id}
                className="border rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition "
              >
                <Link to={`/property/${property._id}`}>
                  <div className="w-full h-40 relative">
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
                    <h2 className="font-semibold text-lg">
                      {property.location}
                    </h2>
                    <p className="text-black font-bold">{property.price}</p>
                  </div>
                </Link>

                <div className="flex gap-2 px-4">
                  <Link
                    to={`/property/edit/${property._id}`}
                    className="cursor-pointer text-center border border-[#b17f44] text-[#b17f44] rounded-md py-2 w-full"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteHandler(property._id)}
                    className="cursor-pointer text-center bg-[#b17f44] text-white rounded-md py-2 w-full"
                    type="submit"
                  >
                    Delete
                  </button>
                </div>
              </div>
            )) : <h1>No Property Yet!</h1>}
          </div>

          <h1 className="text-3xl font-bold my-4 mt-10">My Bookings</h1>
          <div className="grid grid-cols-3 gap-x-3">
            {bookings.map((booking) => (
              <div
                key={booking.id}
                className={`py-5 px-8 mb-2 rounded-xl shadow-[0px_0px_30px_2px_#e4e4e7] `}
              >
                <div className="flex items-center w-full justify-between">
                  <h1 className="text-md font-bold ">Place </h1>
                  <h1 className="text-sm font-light">{booking.property}</h1>
                </div>

                <div className="flex items-center w-full justify-between">
                  <h3 className="text-md font-bold ">Price </h3>
                  <h3 className={`text-sm font-light`}>
                    ₹{booking.totalPrice}
                  </h3>
                </div>
                <div className="flex items-center w-full justify-between">
                  <h3 className="text-md font-bold ">Staus </h3>
                  <h3 className={`text-sm ${booking.status.toLowerCase() == "confirmed" && "text-green-600"} ${booking.status.toLowerCase() == "pending" && "text-orange-600"} ${booking.status.toLowerCase() == "cancelled" && "text-red-600"} font-bold `}>{booking.status}</h3>
                </div>
                <div className="flex items-center w-full justify-between">
                  <h3 className="text-md font-bold ">Order ID </h3>
                  <h3 className="text-sm font-light">
                    {booking.razorpayOrderId}
                  </h3>
                </div>

                <div className="flex justify-between items-center mt-4">
                  <div className="flex flex-col w-full justify-between">
                    <h3 className="text-md font-bold ">Check In </h3>
                    <h3 className="text-sm font-light">
                      {new Date(booking.checkInDate).getDate() +
                        " " +
                        new Date(booking.checkInDate).toLocaleString(
                          "default",
                          { month: "short" }
                        ) +
                        " " +
                        new Date(booking.checkInDate).getFullYear()}
                    </h3>
                  </div>
                  <div className="flex items-end flex-col w-full justify-between">
                    <h3 className="text-md font-bold ">Check Out </h3>
                    <h3 className="text-sm font-light">
                      {new Date(booking.checkOutDate).getDate() +
                        " " +
                        new Date(booking.checkOutDate).toLocaleString(
                          "default",
                          { month: "short" }
                        ) +
                        " " +
                        new Date(booking.checkOutDate).getFullYear()}
                    </h3>
                  </div>
                </div>
                
                {booking.status.toLowerCase() !== "cancelled" && <button
                    onClick={() => bookingCancelHandler(property.id)}
                    className="cursor-pointer text-center border-[#b17f44] text-[#b17f44]  border rounded-md mt-3 py-2 w-full"
                    type="submit"
                  >
                    Cancel Booking
                  </button> }

              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : <h1>Loading....</h1>
};

export default ProfilePage;
