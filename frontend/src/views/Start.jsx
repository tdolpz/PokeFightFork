import {useQuery} from "@tanstack/react-query";
import {useEffect, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import enterthearena from "../assets/enterthearena.png";
import fontlineinput from "../assets/fontlineinput.png";
import loudspeaker from "../assets/loudspeaker.png";
import pokegym from "../assets/pokemon-gym.mp3";
import PulseButton from "../components/PulseButton.jsx";
import {UseContextStore} from "../utils/ContextProvider.jsx";
import {fetchPlayers, fetchPokemons} from "../utils/queries.js";

function Start() {

	// make db-queries via react-query
	const pokemonQuery = useQuery({queryKey: ["pokemons"], queryFn: fetchPokemons});
	const playerQuery = useQuery({queryKey: ["player"], queryFn: fetchPlayers});

	// get global context vars
	const {
		playerData,
		playerName,
		setPokemonData,
		setPlayerData,
		setPlayerName,
		setPlayerId
	} = UseContextStore();

	// initialize vars and local state vars
	const pokemonGym = new Audio(pokegym);
	const navigate = useNavigate();
	const inputElement = useRef();
	const [filledOut, setFilledOut] = useState(false);
	const [loading, setLoading] = useState(true);

	// function executed on enter the fight arena
	const enterArena = () => {

		// check if form is filled out
		if (filledOut) {

			// check for existing player
			let existingPlayer = playerData.filter(item => item.name === playerName);

			// new player
			if (existingPlayer.length === 0) {
				setPlayerId(null);
				navigate('/shuffle');
			}

			// player already exists
			if (existingPlayer.length !== 0) {
				alert('This Player already exists. Do you want to play as "' + playerName + '"?');
				setPlayerId(existingPlayer[0]._id);
				navigate('/shuffle');
			}
		}
		else alert('Please enter your name.');
	}

	// handle form input
	const handleChange = (e) => {
		e.preventDefault();
		setPlayerName(e.target.value);
		setFilledOut(true);
	}

	// handle form submit
	const handleSubmit = (e) => {
		e.preventDefault();
		enterArena();
	}

	// trigger function to play sound
	const playSound = () => (pokemonGym.paused) ? pokemonGym.play() : pokemonGym.pause();

	// set context vars (with dependencies)
	useEffect(() => {
		if (!pokemonQuery.isLoading && !playerQuery.isLoading) {
			setPokemonData(pokemonQuery.data);
			setPlayerData(playerQuery.data);
			setLoading(false);
		}
	}, [
		pokemonQuery.isLoading,
		playerQuery.isLoading,
		pokemonQuery.data,
		playerQuery,
		setPokemonData,
		setPlayerData
	]);

	console.log('START: playerName', playerName)

	// render component
	return (
		<div className="relative bg-indigo-950 bg-darkbrickentrance bg-cover bg-center w-screen h-screen">
			{loading ? (
				<div className="w-screen h-screen flex justify-center items-center"></div>
			) : (

				<div className="inner-container">
					<img src={enterthearena} alt="#" className="mb-8"/>
					<form onSubmit={handleSubmit}>
						<label className="block text-center text-amber-500/60 tracking-widest text-xl" htmlFor="myInput">INSERT
							YOUR
							NAME</label>
						<input
							id="myInput"
							name="myInput"
							className="start-input w-[500px] font-pokemon text-pokemon text-3xl pokefont-outline tracking-[3px] h-16"
							autoFocus="autofocus"
							ref={inputElement}
							onChange={handleChange}
						/>
					</form>
					<img src={fontlineinput} alt="#" className="mb-8"/>
					<button onClick={playSound} className="opacity-60 my-6">
						<img className="max-w-8 mr-4" src={loudspeaker} alt="#"/>
					</button>
					<PulseButton view="start" handleClick={enterArena}/>
				</div>
			)}
		</div>
	)
}

export default Start;
