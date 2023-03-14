import { useEffect, useState } from "react";

import { AnimesList } from "../../components/AnimesList";
import { Header } from "../../components/Header";

import { getAnimes } from "../../services/getAnimes";

import "../../index.css";
import { useFetch } from "../../hooks/useFetch";

const Animes = () => {
  const [animesSearch, setAnimesSearch] = useState([{}]);

  const { fetchedData, isLoading } = useFetch(
    "/anime",
    {
      q: animesSearch,
      sfw: true,
    },
    animesSearch
  );

  return (
    <div className="min-h-screen bg-zinc-900 text-white p-4">
      <Header setAnimes={setAnimesSearch} />

      <div className="grid grid-cols-4 place-items-stretch">
        <AnimesList animes={fetchedData} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default Animes;
