import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import axios from "axios"

const fetchData = async (id) => {
	const { data } = await axios.get(`http://localhost:8000/pokemon/${id}`);
	return data;
};

function PokemonInfo() {

	const { pokemonId} = useParams();
	const { data, isLoading, isError} = useQuery({
		queryKey: ['myData', pokemonId],
		queryFn: () => fetchData(pokemonId)
	})

	if (isLoading) {
		return <p>Loading...</p>;
	}

	if (isError) {
		return <p>Error fetching data</p>;
	}

	return (
		<div>
			{data.name.english}<br/>
			<img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`} alt={data.name.english} />
		</div>
	);
}

export default PokemonInfo;
