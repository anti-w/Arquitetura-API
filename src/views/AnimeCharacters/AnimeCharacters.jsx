import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { CharactersList } from "../../components";

import { getAnimeCharacters } from "../../services/getAnimeCharacters";

import "../../index.css";

const AnimeCharacters = () => {
  const [characters, setCharacters] = useState([{}]);
  const [isLoading, setIsLoading] = useState(true);

  let { id } = useParams();

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const { data } = await getAnimeCharacters(id);
      console.log(data);
      setIsLoading(false);
      setCharacters(data);
    })();
  }, []);

  return (
    <div className="min-h-screen bg-zinc-900 text-white p-4">
      <div className="grid grid-cols-4 place-items-stretch">
        <CharactersList characters={characters} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default AnimeCharacters;
