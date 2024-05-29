import {useEffect, useState} from "react";
import {NavLink, useParams} from 'react-router-dom';
import axios from "axios";

function PokemonDetailInfo() {

	const [entry, setEntry] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState([]);
	const { pokemonId, pokemonInfo } = useParams();

	useEffect(() => {
		axios
			.get(`http://localhost:8000/pokemon/${pokemonId}/${pokemonInfo}`)
			.then((res) => {
				setEntry(res.data);
				//console.log(res.data);
				setLoading(false);
			})
			.catch((error) => {
				console.error(error);
				setError(error.message);
				setLoading(false);
			});
	}, [pokemonInfo]);


	let out = '';

	if(!loading) {
		if (pokemonInfo === 'base') {
			console.log(entry);
			out = (
				<>
					base
				</>
			);
		}
		if (pokemonInfo === 'type') {
			console.log(entry);
			out = (
				<>
					type
				</>
			);
		}
		if (pokemonInfo === 'name') {
			console.log(entry);
			out = (
				<>
					name
				</>
			);
		}
	}
	else {
		out = 'loading';
	}

	return (
		<>
			<div>PokemonDetailInfo</div>
			{out}
		</>
	)
}

export default PokemonDetailInfo;
