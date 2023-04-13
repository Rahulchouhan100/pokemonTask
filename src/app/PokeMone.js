import { useQuery, gql } from "@apollo/client";

const GET_POKEMONS = gql`
  query GetPokemons {
    pokemons(limit: 10, offset: 0) {
      results {
        id
        number
        name
      }
    }
  }
`;

const PokeMone = () => {
  const { loading, error, data } = useQuery(GET_POKEMONS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>error...</p>;

  return (
    <div>
      <ul>
        <h1>hi</h1>
        {console.log(data)}
      </ul>
    </div>
  );
};

export default PokeMone;
