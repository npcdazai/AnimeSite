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
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get(
          `https://api.jikan.moe/v4/anime/${mal_id}/news`
        );
        setNews(res.data.data || []);
      } catch (err) {
        setError(err);
      }
    };

    fetchNews();
  }, [mal_id]);

  useEffect(() => {
    const fetchAnime = async () => {
      try {
        const res = await axios.get(`https://api.jikan.moe/v4/anime/${mal_id}`);
        setAnimeData([res.data.data] || []);
      } catch (err) {
        setError(err);
      }
    };
    fetchAnime();
  }, [mal_id]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {animeData.map((item) => {
        const {
          mal_id,
          titles = [],
          images = {},
          title_japanese = "N/A",
          title_synonyms = [],
          season = "N/A",
          status = "N/A",
          score = "N/A",
          studios = [],
          producers = [],
          genres = []
        } = item;

        return (
          <div key={mal_id}>
            <SingleAnime
              title={titles[0]?.title || "N/A"}
              image={images.jpg?.large_image_url || "/placeholder.jpg"}
              title_japanese={title_japanese}
              title_synonyms={title_synonyms.join(", ")}
              year={season}
              status={status}
              score={score}
              studios={studios[0]?.name || "N/A"}
              producers={producers.map(producer =>producer.name).join(",")}
              genres={genres.map(genre => genre.name).join(", ") || "N/A"}
            />
          </div>
        );
      })}

      <div className="flex flex-row align-middle items-center p-2">
        <div className="w-9/12 text-white text-center">
          <p>New Anime</p>
          <div className="h-[200px] overflow-y-scroll">
            {news.map((val) => {
              return (
                <div key={val?.mal_id}>
                  <SingleCard
                    title={val?.title[2] || "N/A"}
                    img={ val?.images?.jpg?.image_url || "/placeholder.jpg"}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-2/6 text-white text-center">
          <p>Related Anime</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
