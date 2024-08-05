"use client";
import MovieCard from "@/app/components/ui/MovieCards"
import {useContext} from "react"
import {AllAnimeContext} from "@/app/context/AllAnime"
const Page = () => {
  const anime= useContext(AllAnimeContext);
  return (
    <div className="flex gap-5 mt-36 align-middle flex-wrap">
      {anime.map((val)=>{
        return (
          <div key={val.mal_id}>
            <MovieCard
            mal_id={val.mal_id}
            image_url={val?.images?.jpg?.image_url}
            title={val?.titles[0]?.title}
            status={val?.status}
            />
            </div>
        )
      })}
    </div>
  );
};

export default Page;
