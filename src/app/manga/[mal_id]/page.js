"use client";

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import SingleAnime from "@/app/components/SingleMovieCard";
import { useEffect, useState } from "react";

const Page = ({ params }) => {
  const mal_id = params.mal_id;

  const [animeData, setAnimeData] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchAnime = async () => {
    try {
      const res = await axios.get(`https://api.jikan.moe/v4/anime/${mal_id}`);
      console.log(res.data.data);
      setAnimeData([res.data.data]);
    } catch (err) {
      console.log(err);
    }
  };

  const fetNewAnime = async () => {
    try {

    }
    catch(erra){

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
              producers={item?.producers?.name}
            />
            {/* <h1>
              <div className="max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <Link href={`/manga`}>
                  <Image
                    className="rounded-t-lg"
                    src={item?.images?.jpg?.large_image_url}
                    alt="anime"
                    width={250}
                    height={200}
                  />
                </Link>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {item?.titles[0]?.title}
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {item?.synopsis}
                  </p>
                  <Link
                    href={`#`}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Watch
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </h1> */}
          </div>
        );
      })}
    </div>
  );
};

export default Page;
