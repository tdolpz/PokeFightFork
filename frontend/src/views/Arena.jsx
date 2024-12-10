import {useQuery} from "@tanstack/react-query";
import {useEffect, useState} from "react";
import {Outlet, useNavigate} from "react-router-dom";
import {UseContextStore} from "../utils/ContextProvider.jsx";
import {fetchPlayers, fetchPokemons} from "../utils/queries.js";

function Arena() {

	const pokemonQuery = useQuery({queryKey: ["pokemons"], queryFn: fetchPokemons});
	const playerQuery = useQuery({queryKey: ["player"], queryFn: fetchPlayers});
	const [loading, setLoading] = useState(true);
	const {setPokemonData, setPlayerData } = UseContextStore();
	const navigate = useNavigate();

	useEffect(() => {
		if (!pokemonQuery.isLoading && !playerQuery.isLoading) {
			setPokemonData(pokemonQuery.data);
			setPlayerData(playerQuery.data);
		}
	}, [
		pokemonQuery.isLoading,
		playerQuery.isLoading,
		pokemonQuery.data,
		playerQuery,
		setPokemonData,
		setPlayerData]);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
			navigate("/start");
		}, 600);


	}, []);

	return (
		<>
			{loading ? (
				<div className="w-screen h-screen flex justify-center items-center bg-[#101721]">LOADING ...</div>
			) : (
				<>
					{/*<div className="absolute top-8 right-8 z-20 bg-fuchsia-500">AUDIO CONTROLS</div>*/}
					<Outlet/>
				</>
			)}
		</>
	);
}

export default Arena;
