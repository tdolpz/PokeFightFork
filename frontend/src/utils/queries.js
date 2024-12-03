import axios from "axios";

export const fetchPokemons = async () => {
	const {data} = await axios.get(`/api/pokemon`);
	return data;
};

export const fetchPlayers = async () => {
	const {data} = await axios.get(`/api/player`);
	return data;
};

