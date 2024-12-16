import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const BookingCard = ({nightRate }) => {
  const [guests, setGuests] = useState(1); // Initialize guests state with default value 1
  const [checkinDate, setCheckinDate] = useState(new Date().toISOString().split('T')[0]); // Current date as checkin date
  const [checkoutDate, setCheckoutDate] = useState(new Date(new Date().setDate(new Date().getDate() + 2)).toISOString().split('T')[0]); // 2 days ahead as checkout date
  const [nights, setNights] = useState(5); // Calculate nights based on checkin and checkout dates
  
  useEffect(() => {
      const checkin = new Date(checkinDate);
      const checkout = new Date(checkoutDate);
      const difference = checkout.getTime() - checkin.getTime();
      const totalDays = Math.ceil(difference / (1000 * 60 * 60 * 24));
      setNights(totalDays);
      if(checkinDate === checkoutDate) {
        setNights(1);
      }
  }, [checkinDate, checkoutDate]);

  const totalBeforeTaxes = nightRate * nights * guests; // Multiply by guests for dynamic pricing

  return (
    <div className="border p-6 max-w-sm mx-auto shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">₹{nightRate.toLocaleString()} <span className="text-sm">night</span></h2>

      <div className="border rounded-md mb-4">
        <div className="flex justify-between p-2 border-b">
          <div>
            <p className="text-sm font-semibold">Check-in</p>
            <input type="date" className="text-gray-500" value={checkinDate} onChange={(e) => setCheckinDate(e.target.value)} />
          </div>
          <div>
            <p className="text-sm font-semibold">Checkout</p>
            <input type="date" className="text-gray-500" value={checkoutDate} onChange={(e) => setCheckoutDate(e.target.value)} />
          </div>
        </div>
        <div className="p-2">
          <p className="text-sm font-semibold">Guests</p>
          <input type="number" className="text-gray-500 w-full px-2 py-1" value={guests} onChange={(e) => setGuests(e.target.value)} min={1} max={999} />
        </div>
      </div>

      <Link to={`/booking/1?checkinDate=${checkinDate}&checkoutDate=${checkoutDate}&guests=${guests}&nights=${nights}&price=${nightRate}`}>
      <button className="bg-[#b17f44] text-white font-bold py-2 px-4 w-full rounded-lg mb-4">
        Reserve
      </button>
      </Link>
      <p className="text-sm text-gray-500 text-center mb-4">You won't be charged yet</p>

      <div className="text-sm">
        <div className="flex justify-between mb-2">
          <span>₹{nightRate.toLocaleString()} x {nights} nights x {guests} guests</span>
          <span>₹{(nightRate * nights * guests).toLocaleString()}</span>
        </div>
        <div className="flex justify-between font-bold text-lg">
          <span>Total before taxes</span>
          <span>₹{totalBeforeTaxes.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
