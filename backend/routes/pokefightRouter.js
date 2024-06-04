import { Router } from 'express';
import { getAllPokemons, getPokemonById, getPokemonInfo } from "../controller/pokemonController.js";

const router = Router();

router.get('/', getAllPokemons);
router.get('/:id', getPokemonById);
router.get('/:id/:info', getPokemonInfo);

export default router;
