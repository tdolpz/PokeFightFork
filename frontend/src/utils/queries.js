import axios from "axios";

export const fetchPokemons = async () => {
	const {data} = await axios.get(`http://localhost:8000/pokemon/`);
	return data;
};

export const fetchPlayers = async () => {
	const {data} = await axios.get(`http://localhost:8000/player/`);
	return data;
};
