"use client";

import axios from "axios";
import { createContext, useState, useContext, useEffect } from "react";

export const AllAnimeContext = createContext();

export const AllAnimeProvider = (props) => {
  const [animeData, setAnimeData] = useState([]);
  const API = "https://api.jikan.moe/v4/anime";

  const fetchAnime = async () => {
    try {
      const res = await axios.get(API);
      setAnimeData(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAnime();
  }, []);

  return (
    <AllAnimeContext.Provider value={animeData}>
      {props.children}
    </AllAnimeContext.Provider>
  );
};
