import {UseContextStore} from "../utils/ContextProvider.jsx";
import getTypeColor from "./TypeColor.jsx";

function PokemonCard2({id}) {

	const {pokemonData} = UseContextStore();

	const data = pokemonData.filter((pokemon => pokemon.id === id))[0];
	const name = data.name.english;
	const type = data.type;


	return (
		<div className="rounded-lg bg-white drop-shadow-lg w-64 h-96 content-start">
			<div className='flex flex-col items-center '>
				<h2 className='text-xl text-slate-200 font-semibold mb-2 bg-zinc-900 w-full rounded-t-lg p-2 text-center '>
					{name}
				</h2>

				{/* Type Container */}
				<div className='m-2 flex items-center justify-center'>

					<span
						className='text-sm font-bold text-center me-2 px-2.5 py-0.5 rounded bg-gray-700 text-amber-400 border border-gray-500'>
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


			</div>
		</div>
	)
}

export default PokemonCard2;
