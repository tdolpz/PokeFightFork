import Player from '../models/gameSchema.js';

// get all players
export const getPlayer = async (req, res, next) => {
	try {
		const player = await Player.find();
		if (player.length === 0) {
			throw {statusCode: 404, message: 'Player not found'};
		}
		res.json(player);
	} catch (error) {
		next(error);
	}
};

// add new player
export const addNewPlayer = async (req, res, next) => {
	const {name} = req.body;
	try {
		const newPlayer = await Player.create({
			name
		});
		res.status(201).json(newPlayer);
	} catch (error) {
		next(error);
	}
};
