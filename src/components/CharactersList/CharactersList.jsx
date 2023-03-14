import CharacterCard from "../CharacterCard";

const CharactersList = ({ characters, isLoading }) => {
  if (isLoading) return <h1>Carregando</h1>;

  return characters.map((character, i) => (
    <CharacterCard
      key={i}
      name={character.name}
      coverUrl={character.images.webp}
      role={character.role}
    />
  ));
};

export default CharactersList;
