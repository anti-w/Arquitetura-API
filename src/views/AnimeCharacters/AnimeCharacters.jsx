import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CharactersList from "../../components/CharactersList/CharactersList";
import "../../index.css";
import { getAnimeCharacters } from "../../services/getAnimeCharacters";

const AnimeCharacters = () => {
  const [characters, setCharacters] = useState([{}]);
  let { id } = useParams();

  useEffect(() => {
    (async () => {
      const { data } = await getAnimeCharacters(id);
      console.log(data);
      setCharacters(data);
    })();
  }, []);

  return (
    <div className="min-h-screen bg-zinc-900 text-white p-4">
      <CharactersList characters={characters} />
    </div>
  );
};

export default AnimeCharacters;
