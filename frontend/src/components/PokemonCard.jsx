import { Context } from "../utils/context.js";
import { useContext, useEffect } from "react";
import getTypeColor from "./TypeColor.jsx";
import HpBar from "./HpBar.jsx";
//import PokemonStats from "./pokemon_card/PokemonStats.jsx";

function PokemonCard({ id, life, isAttacker, attackMethod, isNewRound }) {

	useEffect(() => {
		if (life <= 0) {
			isNewRound(true);
		}
	}, [life]);


	if (life <= 0) life = 0;

	const context = useContext(Context);
	const pokemonData = context.data;
	const data = pokemonData.filter((pokemon => pokemon.id === id))[0];
	const name = data.name.english;
	const type = data.type;

	// let classname = "aspect-[2/3]  w-60 rounded-xl text-white p-6 text-sm";
	// classname += (life > 0) ? " bg-fuchsia-500" : " bg-gray-500";

	let attackType, defenceType;

	if (isAttacker) {
		if (attackMethod==='spattack') attackType = 'Special Attack';
		else attackType = 'Attack';
	}
	else {
		if (attackMethod==='spattack') defenceType = 'Special Defense'
		else defenceType = 'Defense'
	}

	return (
		<div className='rounded-lg bg-white drop-shadow-lg w-64 h-96 content-start'>
		<div className='flex flex-col items-center '>

			<h2 className='text-xl text-slate-200 font-semibold mb-2 bg-zinc-900 w-full rounded-t-lg p-2 text-center '>
				{name}
			</h2>

			{/* Type Container */}
			<div className='m-2 flex items-center justify-center'>
				<span className='bg-gray-100 text-gray-800 text-sm font-bold text-center me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-amber-400 border border-gray-500'>
					TYPE:{" "}
				</span>
				{type.map((type, index) => {
					let classname = 'text-sm font-medium me-2 px-2.5 py-0.5 rounded text-white ' + getTypeColor(type);
					return (
						<span key={index} className={classname}>{type}</span>
					)
				})}
			</div>

			{/* Image */}
			<img
				src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world//${id}.svg`}
				alt={name}
				className='size-48 p-3'
			/>

			{/* HpBar */}
			<HpBar life={life} />

			{/* fight type */}
			<div className="text-black mt-4">{isAttacker ? <span>{attackType}</span> : <span>{defenceType}</span>}</div>

			{/* Stats */}
			{/*<div>*/}
			{/*	/!*<PokemonStats pokemon={pokemon} />*!/ STATS*/}
			{/*</div>*/}

		</div>
	</div>
	)
}

export default PokemonCard;
