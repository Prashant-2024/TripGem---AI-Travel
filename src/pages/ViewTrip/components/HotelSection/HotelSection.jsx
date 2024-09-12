import React from "react";
import PlaceholderImg from "../../../../assets/Placeholder.jpeg";
import { Link } from "react-router-dom";

const HotelSection = ({ trip }) => {
  return (
    <div>
      <h2 className="font-bold text-xl mt-5">Hotel Recommendation</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {(
          trip?.tripData?.HotelOptions ||
          trip?.tripData?.hotelOptions ||
          trip?.tripData?.Hotels ||
          []
        ).map((hotel, index) => (
          <Link
            to={
              `https://www.google.com/maps/search/?api=1&query=` +
              hotel.HotelName +
              "," +
              hotel.HotelAddress
            }
            target="_blank"
          >
            <div className="hover:scale-105 transition-all cursor-pointer">
              <img src={PlaceholderImg} alt="" className="rounded-xl" />
              <div className="my-2 flex flex-col">
                <h2 className="font-medium">{hotel.HotelName}</h2>
                <h2 className="text-xs text-gray-500">
                  📍 {hotel.HotelAddress}
                </h2>
                <h2 className="text-sm">💲{hotel.Price}</h2>
                <h2 className="text-sm">⭐ {hotel.Rating}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HotelSection;
