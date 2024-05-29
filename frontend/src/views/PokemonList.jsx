import axios from 'axios';
import { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';
function PokemonList() {

	const [entries, setEntries] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState([]);

	useEffect(() => {
		axios
			.get('http://localhost:8000/pokemon')
			.then((res) => {
				setEntries(res.data);
				setLoading(false);
			})
			.catch((error) => {
				console.error(error);
				setError(error.message);
				setLoading(false);
			});
	}, []);

	let out = '';

	if(loading) {
		out = 'loading';
	}
	else {
		out = entries.map(entry => {
			return (
				<div key={entry.id}>
					<NavLink to={`/pokemon/${entry.id}`}>
						{entry.name.english}
					</NavLink>
				</div>
			);
		});
	}

	return (
		<>
			<h1>POKEMON LIST</h1>
			{out}
		</>
	)
}

export default PokemonList;
