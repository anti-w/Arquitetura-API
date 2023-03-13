import { useEffect, useState } from "react";

import { AnimesList } from "../../components/AnimesList";
import { Header } from "../../components/Header";

import { getAnimes } from "../../services/getAnimes";

import "../../index.css";

function Animes() {
  const [animes, setAnimes] = useState([{}]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const { data } = await getAnimes();
      setAnimes(data);
      setIsLoading(false);
    })();
  }, []);

  return (
    <div className="min-h-screen bg-zinc-900 text-white p-4">
      <Header setAnimes={setAnimes} />

      <div className="grid grid-cols-4 place-items-stretch">
        <AnimesList animes={animes} isLoading={isLoading} />
      </div>
    </div>
  );
}

export default Animes;
