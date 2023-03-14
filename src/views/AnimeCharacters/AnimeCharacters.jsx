import { useParams } from "react-router-dom";

import { CharactersList } from "../../components";

import { useFetch } from "../../hooks/useFetch";

import "../../index.css";

const AnimeCharacters = () => {
  let { id } = useParams();

  const { fetchedData, isLoading } = useFetch(`anime/${id}/characters`);

  return (
    <div className="min-h-screen bg-zinc-900 text-white p-4">
      <div className="grid grid-cols-4 place-items-stretch">
        <CharactersList characters={fetchedData} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default AnimeCharacters;
