import React from "react";

const AllBookings = () => {

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


  return (
    <main className="flex-1 px-6 ">
      {/* Last Tasks */}
      <section className="bg-white p-6 rounded-lg shadow-md min-h-[80vh]">
        <h2 className="text-xl font-bold mb-4">Bookings</h2>
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
                  <h1 className="text-md font-bold ">Booked by </h1>
                  <h1 className="text-sm font-light">{booking.user}</h1>
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

              </div>
            ))}
          </div>
      </section>

    </main>
  );
};

export default AllBookings;
