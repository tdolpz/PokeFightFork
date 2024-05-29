import { useQuery } from '@tanstack/react-query';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const fetchData = async () => {
	const { data } = await axios.get(`http://localhost:8000/pokemon/`);
	return data;
};

function PokemonList() {

	const { data, isLoading, isError} = useQuery({
		queryKey: ['myData'],
		queryFn: fetchData
	})

	if (isLoading) {
		return <p>Loading...</p>;
	}

	if (isError) {
		return <p>Error fetching data</p>;
	}

	return (
		<>
			<h1>POKEMON LIST</h1>
			{data.map(entry => (
				<div key={entry.id}>
					<NavLink to={`/pokemon/${entry.id}`}>
						{entry.name.english}
					</NavLink>
				</div>
			))};
		</>
	)
}

export default PokemonList;
