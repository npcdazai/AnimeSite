import Image from "next/image";
import React from "react";

import { IoLogoWhatsapp } from "react-icons/io";
import { IoLogoFacebook } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io5";

const MyHeroAcademiaSeason7 = ({
  image,
  title,
  duration,
  title_japanese,
  title_synonyms,
  year,
  genres,
  genres1,
  genres2,
  studios,
  producers,
}) => {
  return (
    <div>
    <div
      style={{ backgroundImage: `url(${image})`, filter: "blur(20px)",  }}
      className="bg-cover bg-center h-screen opacity-35 absolute min-h-screen w-full"
    />
    <div className="bg-cover bg-center h-screen text-white min-h-screen flex justify-center items-center pt-28 w-full">
      <div className="w-full p-6 flex justify-between bg-opacity-50 backdrop-blur-lg">
        <div className="flex flex-col md:flex-row p-7">
          <div className="md:w-1/3">
            <Image
              src={image}
              alt="My Hero Academia Season 7"
              className="rounded-md"
              width={250}
              height={200}
            />
          </div>
          <div className="md:w-full ml-10">
            <h1 className="text-3xl font-bold text-pink-500">{title}</h1>
            <div className="flex items-center my-2">
              <span className="bg-pink-500 text-white px-2 py-1 rounded-md mr-2">PG-13</span>
              <span className="bg-green-500 text-white px-2 py-1 rounded-md mr-2">HD</span>
              <span className="bg-blue-500 text-white px-2 py-1 rounded-md">{duration}</span>
            </div>
            <div className="mt-4">
              <button className="bg-pink-500 text-white px-4 py-2 rounded-md mr-2">Watch now</button>
              <button className="bg-gray-700 text-white px-4 py-2 rounded-md">+ Add to List</button>
            </div>
            <p className="mt-8">
              HiAnime is the best site to watch <span className="font-bold">{title}</span> SUB online, or you can even watch <span className="font-bold">{title}</span> DUB in HD quality. You can also find Bones anime on this website.
            </p>
            <div className="flex items-center mt-4">
              <span className="text-gray-400 mr-2">Share Anime</span>
              <div className="flex space-x-2">
                <a href="#" className="bg-blue-600 p-2 rounded-full"><IoLogoFacebook /></a>
                <a href="#" className="bg-pink-700 p-2 rounded-full"><IoLogoInstagram /></a>
                <a href="#" className="bg-green-500 p-2 rounded-full"><IoLogoWhatsapp /></a>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            background: "rgba(255, 255, 255, 0.2)",
            borderRadius: "16px",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            textAlign: "center",
          }}
          className="mt-4 w-1/3 p-4"
        >
          <p><span className="font-bold">Japanese: </span>{title_japanese}</p>
          <p><span className="font-bold">Synonyms:</span> {title_synonyms}</p>
          <p><span className="font-bold">Premiered:</span> {year}</p>
          <p><span className="font-bold">Duration:</span> 24m</p>
          <p><span className="font-bold">Status:</span> {status}</p>
          <p><span className="font-bold">MAL Score:</span> ?</p>
          <div className="flex flex-wrap mt-2 space-x-2">
            <span className="bg-gray-700 px-2 py-1 rounded-md">{genres}</span>
            <span className="bg-gray-700 px-2 py-1 rounded-md">{genres1}</span>
            <span className="bg-gray-700 px-2 py-1 rounded-md">{genres2}</span>
          </div>
          <p className="mt-2"><span className="font-bold">Studios:</span> {studios}</p>
          <p><span className="font-bold">Producers:</span> {producers}</p>
        </div>
      </div>
    </div>
  </div>
  );
};

export default MyHeroAcademiaSeason7;
