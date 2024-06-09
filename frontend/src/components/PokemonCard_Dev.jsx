import { Context } from "../utils/context.js";
import { useContext, useEffect } from "react";

function PokemonCard_Dev({ id, life, isAttacker, isNewRound }) {

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


	let classname = "aspect-[2/3]  w-60 rounded-xl text-white p-6 text-sm";
	classname += (life > 0) ? " bg-fuchsia-500" : " bg-gray-500";

	return (
		<div className={classname}>
			<p className="py-4"><strong>{name} {id}</strong></p>
			{Object.entries(data.base).map(([key, value], index) => (
				<p key={index}>{key}: {value}</p>
			))}

			<div className="mt-8 bg-fuchsia-900 rounded-full h-3" style={{width: life + "%"}}></div>
			<div>{isAttacker ? "Attacker" : "Defender"}</div>
			{isAttacker ? <div>AttackType</div> : <div>DefendType</div>}

		</div>
	)
}

export default PokemonCard_Dev;
