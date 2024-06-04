import Test from '../models/gameSchema.js';

export const getData = async (req, res, next) => {
	try {
		const highscore = await Test.find();
		if (!highscore.length) {
			throw { statusCode: 404, message: 'Highscore not found' };
		}
		res.json(highscore);
	}
	catch (error) {
		next(error);
	}
};

export const addData = async (req, res, next) => {
	const { name } = req.body;
	try {
		const newHighscore = await Test.create({
			name
		});
		res.status(201).json(newHighscore);
	}
	catch (error) {
		next(error);
	}
};
