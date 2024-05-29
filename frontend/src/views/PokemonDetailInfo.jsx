import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import axios from "axios"

const fetchData = async (id, info) => {
	const { data } = await axios.get(`http://localhost:8000/pokemon/${id}/${info}`);
	return data;
};

function PokemonDetailInfo() {

	const { pokemonId, pokemonInfo } = useParams();
	const { data, isLoading, isError} = useQuery({
		queryKey: ['myData', pokemonId, pokemonInfo],
		queryFn: () => fetchData(pokemonId, pokemonInfo)
	})

	if (isLoading) {
		return <p>Loading...</p>;
	}

	if (isError) {
		return <p>Error fetching data</p>;
	}

	return (
		<div>
			{Object.entries(data).map(([key, value], index) => (
				<p key={index}>{key}: {value}</p>
			))}
		</div>
	);

}

export default PokemonDetailInfo;
