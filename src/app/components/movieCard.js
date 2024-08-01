import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const MovieCard = (val) => {
  const { mal_id, image_url, title, episodes, status } = val;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative max-w-72 max-h-96 bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div>
        <Link href={`/manga/${mal_id}`}>
          <Image
            className="w-full  h-3/5 object-cover"
            src={val?.images?.jpg?.image_url}
            alt="anime"
            width={288}
            height={288}
          />
        </Link>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent p-4 h-1/2 flex flex-col justify-end">
        <h5 className="text-white text-xl font-bold mb-2 break-words">
          {val?.titles[0]?.title}
        </h5>
        <div className="flex items-center justify-between">
          <span className="text-sm bg-green-400 text-white px-2 py-1 rounded-lg">
            {status}
          </span>
        </div>
      </div>
      {isHovered && (
        <div className="absolute inset-0 bg-[rgba(0, 0, 0, .3)] bg-opacity-75 flex justify-center items-center backdrop-blur-md">
          <Link
            href={`/manga/${mal_id}`}
            className="bg-pink-500 text-white text-sm font-semibold py-2 px-4 rounded-full hover:bg-pink-600 transition"
          >
            Watch now
          </Link>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
