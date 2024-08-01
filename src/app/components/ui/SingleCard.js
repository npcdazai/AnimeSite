import Image from "next/image";
import React from "react";

const SingleCard = ({img}) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg flex items-center space-x-4 max-w-md mx-auto">
      <Image
        src={img}
        alt="My Hero Academia Season 6"
        className="w-20 h-20 object-cover rounded-lg"
        width={250}
        height={250}
      />
      <div className="text-white">
        <h3 className="text-lg font-semibold">My Hero Academia Season 6</h3>
        <div className="flex items-center space-x-2 mt-1">
          <span className="bg-green-500 text-xs px-2 py-1 rounded">cc 25</span>
          <span className="bg-blue-500 text-xs px-2 py-1 rounded">mic 25</span>
          <span className="bg-gray-700 text-xs px-2 py-1 rounded">25</span>
          <span className="text-gray-400 text-sm">• TV</span>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
