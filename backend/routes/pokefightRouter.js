import { Router } from 'express';
//import * as pokemonController from '../controller/pokemonController.js';
import { getAllPokemons, getPokemonById, getPokemonInfo } from "../controller/pokemonController.js";
const pokefightRouter = Router();

pokefightRouter.route('/').get(getAllPokemons);
pokefightRouter.route('/:id').get(getPokemonById);
pokefightRouter.route('/:id/:info').get(getPokemonInfo);

export default pokefightRouter;
