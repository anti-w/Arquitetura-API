import { Link } from "react-router-dom";

const AnimeCard = ({
  title,
  urlCover,
  urlVisit,
  id,
  score,
  genres,
  status,
  episodes,
}) => {
  return (
    <div key={id} className="flex flex-col items-center p-4">
      <h2 className="font-bold text-xl mb-4">{title}</h2>
      <img src={urlCover} className="w-52" />
      <a href={urlVisit} target="_blank">
        Visit
      </a>
      <span>{score}</span>
      <span>{episodes}</span>
      {genres.map((genre) => (
        <span>{genre.name}</span>
      ))}
      <p>{status}</p>
      <Link to={`/${id}/characters`}> Teste</Link>
    </div>
  );
};

export default AnimeCard;
