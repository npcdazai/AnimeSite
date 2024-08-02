"use client";

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import SingleAnime from "@/app/components/SingleMovieCard";
import { useEffect, useState } from "react";
import SingleCard from "@/app/components/ui/SingleCard";

const Page = ({ params }) => {
  const mal_id = params.mal_id;

  const [animeData, setAnimeData] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchAnime = async () => {
    try {
      const res = await axios.get(`https://api.jikan.moe/v4/anime/${mal_id}`);
      console.log(res.data.data);
      setAnimeData([res.data.data]);s
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAnime();
  }, [fetchAnime, mal_id]);


  return (
    <div>
      {animeData.map((item) => {
        return (
          <div key={item.mal_id}>
            <SingleAnime
              title={item?.titles[0]?.title}
              image={item?.images?.jpg?.large_image_url}
              title_japanese={item?.title_japanese}
              title_synonyms={item?.title_synonyms}
              year={item?.season}
              status={item?.status}
              score={item?.score}
              studios={item?.studios[0]?.name}
              producers={item?.producers[0]?.name}
              genres={item?.genres[0]?.name}
              genres1={item?.genres[1]?.name}
              genres2={item?.genres[2]?.name}
            />
          </div>
        );
      })}
      <div className="flex flex-row">
        <div className=""></div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default Page;
