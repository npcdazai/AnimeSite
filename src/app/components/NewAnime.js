import axios from "axios";
import React, { useEffect, useState } from "react";

const NewAnime = () => {
  const [newAnime, setNewAnime] = useState([]);
  const API = "https://api.jikan.moe/v4/anime/{id}/news";
  const fetchNewAnime = (url) => {
    try {
      const res = axios.get(url);
      const result = res.data;
      setNewAnime(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNewAnime(API);
  }, []);
  return <div>
    {newAnime.map((val)=>{
    return(
        <div key={val.id}>
           
         </div>
    )
    })}
  </div>;
};

export default NewAnime;
