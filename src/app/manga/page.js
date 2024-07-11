"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "../components/movieCard";

const Page = () => {
  const [animeData, setAnimeData] = useState([]);

  const fetchAnime = async () => {
    try {
      const res = await axios.get("https://api.jikan.moe/v4/anime");
      console.log(res.data.data);
      setAnimeData(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchAnime();
  }, []);

  return (
    <div className="flex w-screen gap-5 mt-36 align-middle flex-wrap">
      {animeData.map((val) => {
        return<div className="p-6" key={val.mal_id}><MovieCard {...val}/></div>
      })}
    </div>
  );
};

export default Page;
