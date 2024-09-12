import React from "react";
import PlaceholderImg from "../../../../assets/Placeholder.jpeg";
import { Button } from "@/components/ui/button";
import { FaShare } from "react-icons/fa";

const InfoSection = ({ trip }) => {
  return (
    <div>
      <img
        src={PlaceholderImg}
        className="h-[340px] w-full object-cover rounded-xl"
        alt=""
      />
      <div className="flex justify-between items-center">
        <div className="my-5 flex flex-col gap-2">
          <h2 className="font-bold text-2xl">
            {trip?.userSelection?.location}
          </h2>
          <div className="flex gap-5">
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-small text-xs md:text-md">
              📅 {trip?.userSelection?.noOfDays} Day
            </h2>
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-small text-xs md:text-md">
              💰 {trip?.userSelection?.budget} Budget
            </h2>
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-small text-xs md:text-md">
              🥂 No. Of Travellers: {trip?.userSelection?.travellers}{" "}
            </h2>
          </div>
        </div>
        <Button>
          <FaShare />
        </Button>
      </div>
    </div>
  );
};

export default InfoSection;
