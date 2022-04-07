import { useCharacters } from 'hooks';

export function CharactersList() {
  const { characters, error, loading, loadMore } = useCharacters();

  if (loading) return <span>Loading characters...</span>;

  if (error) return <span>An error ocurred retrieving characters list ...</span>;

  return (
    <>
      <ul style={{ paddingLeft: '2rem' }}>
        {characters?.map(({ char_id, name, img }, index) => (
          <li key={`${char_id}-${index}`}>
            <img loading="lazy" src={img} alt={name} />
            <h2>{name}</h2>
          </li>
        ))}
      </ul>
      <button onClick={loadMore}>Load more</button>
    </>
  );
}
