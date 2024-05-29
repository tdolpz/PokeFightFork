import {useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";

function PokemonInfo() {

	const [entry, setEntry] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState([]);
	const { pokemonId } = useParams();

	useEffect(() => {
		axios
			.get(`http://localhost:8000/pokemon/${pokemonId}`)
			.then((res) => {
				setEntry(res.data);
				console.log(res.data);
				setLoading(false);
			})
			.catch((error) => {
				console.error(error);
				setError(error.message);
				setLoading(false);
			});
	}, [pokemonId]);

	let out = '';

	if(loading) {
		out = 'loading';
	}
	else {
		out = (
			<div>
				<p>Name: {entry.name.english}</p>
				<p>Type: {entry.type.join(', ')}</p>
				<table>
					<tbody>
					<tr>
						<td>Base:</td>
						<td className="">
							{Object.keys(entry.base).map((keyName, key) => (
								<p key={key}>{keyName}: {entry.base[keyName]}</p>
							))}
						</td>
					</tr>
					</tbody>
				</table>
			</div>
		);
	}

	return (
		<>
			<h1>POKEMON INFO</h1>
			{out}
		</>
	)
}

export default PokemonInfo;
