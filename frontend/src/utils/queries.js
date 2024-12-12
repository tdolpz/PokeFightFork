import axios from "axios";

export const fetchPokemons = async () => {
	const {data} = await axios.get(`${import.meta.env.VITE_SERVER_URL}/pokemon`);
	return data;
};

export const fetchPlayers = async () => {
	const {data} = await axios.get(`${import.meta.env.VITE_SERVER_URL}/player`);
	return data;
};

export const addPlayer = async (postData) => {
	try {
		const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/player/new`, postData);
		if (response.status === 201) {
			console.log('Player has been added');
		}
	} catch (error) {
		console.error(error);
	}
}

export const updatePlayer = async (playerId, postData) => {
	try {
		const response = await axios.put(`${import.meta.env.VITE_SERVER_URL}/player/` + playerId, postData);
		if (response.status === 201) {
			console.log('Player has been updated');
		}
	} catch (error) {
		console.error(error);
	}
}

export const deletePlayer = async (playerId, postData) => {
	try {
		const response = await axios.delete(`${import.meta.env.VITE_SERVER_URL}/player/` + playerId, postData);
		if (response.status === 201) {
			console.log('Player has been removed');
		}
	} catch (error) {
		console.error(error);
	}
}
