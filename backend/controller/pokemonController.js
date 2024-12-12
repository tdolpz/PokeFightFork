import { createRequire } from "module";
const pokemonJson = createRequire(import.meta.url)("../pokedex.json");

// import static json file
//import pokemonJson from '../pokedex.json' assert {type: 'json'};

// send json data of all Pokemon to the client
export const getAllPokemons = async (req, res) => {
	res.send(pokemonJson);
};

// send json data of one specific pokemon to the client
export const getPokemonById = async (req, res) => {
	let pokemonId = req.params.id;
	if (pokemonId > pokemonJson.length) {
		res.status(404).send('404 - No Pokemon Found');
	}
	pokemonJson.map(pokemon => {
		if (parseInt(pokemon.id) === parseInt(pokemonId)) {
			res.send(pokemon);
		}
	})
};

// send selected json data of one specific pokemon to the client (e.g. name, type or base)
export const getPokemonInfo = async (req, res) => {
	let pokemonId = req.params.id;
	let pokemonInfo = req.params.info;
	pokemonJson.map(pokemon => {
		if (parseInt(pokemon.id) === parseInt(pokemonId)) {
			// use bracket notation because pokemonInfo is a variable
			res.send(pokemon[pokemonInfo]);
		}
	})
};



