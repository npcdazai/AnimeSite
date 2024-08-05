import Image from "next/image";
import React from "react";

const SingleCard = ({img,title,episodes}) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg flex items-center space-x-4 w-full mx-auto">
      <Image
        src={img}
        alt="My Hero Academia Season 6"
        className="w-20 h-20 object-cover rounded-lg"
        width={250}
        height={250}
      />
      <div className="text-white">
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="flex items-center space-x-2 mt-1">
          <span className="bg-green-500 text-xs px-2 py-1 rounded">cc {episodes}</span>
          <span className="bg-blue-500 text-xs px-2 py-1 rounded">mic {episodes}</span>
          <span className="bg-gray-700 text-xs px-2 py-1 rounded">{episodes}</span>
          <span className="text-gray-400 text-sm">• TV</span>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
