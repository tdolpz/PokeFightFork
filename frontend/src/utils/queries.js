import axios from "axios";

export const fetchPokemons = async () => {
	const {data} = await axios.get(`${import.meta.env.VITE_SERVER_URL}/pokemon`);
	return data;
};

export const fetchPlayers = async () => {
	const {data} = await axios.get(`${import.meta.env.VITE_SERVER_URL}/player`);
	return data;
};

