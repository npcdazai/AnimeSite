// import { createContext, useState, useContext } from "react";
// export const AllAnimeContext = createContext();

// export const AllAnimeProvider = (prop) => {
//   const [animeData, setAnimeData] = useState([]);

//   const fetchAnime = async () => {
//     try {
//       const res = await axios.get("https://api.jikan.moe/v4/anime");
//       console.log(res.data.data);
//       setAnimeData(res.data.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };
//   useEffect(() => {
//     fetchAnime();
//   }, []);

//   return (
//     <AllAnimeContext.Provider value={animeData}>
//       {prop.children}
//     </AllAnimeContext.Provider>
//   );
// };