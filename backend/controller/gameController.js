import Player from '../models/gameSchema.js';

// get all players
export const getPlayer = async (req, res, next) => {
	try {
		const player = await Player.find();
		if (player.length === 0) {
			throw {statusCode: 404, message: 'Player not found'};
		}
		res.json(player);
	}
	catch (error) {
		next(error);
	}
};

// add new player
export const addNewPlayer = async (req, res, next) => {
	const {name, matches, wins} = req.body;
	try {
		const newPlayer = await Player.create({
			name, matches, wins
		});
		res.status(201).json(newPlayer);
	}
	catch (error) {
		next(error);
	}
};

// update player
export const updatePlayer = async (req, res, next) => {
	const {id} = req.params;
	const {name, matches, wins} = req.body;
	try {
		const updatedPlayer = await Player.findByIdAndUpdate(
			id,
			{name, matches, wins},
			{new: true}
		);

		if (!updatedPlayer) {
			throw {statusCode: 404, message: 'Player not found'};
		}
		res.json(updatedPlayer);
	}
	catch (error) {
		next(error);
	}
}
