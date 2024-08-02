"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "../components/movieCard";
import {useContext} from "react"
import {AllAnimeContext} from "@/app/context/AllAnime"
const Page = () => {
  const anime= useContext(AllAnimeContext);
  return (
    <div className="flex gap-5 mt-36 align-middle flex-wrap">
      {anime.map((val) => {
        return<div key={val.mal_id}><MovieCard {...val}/></div>
      })}
    </div>
  );
};

export default Page;
