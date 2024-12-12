import mongoose from 'mongoose';

const playerSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'name is required'],
		unique: true,
		trim: true,
	},
	matches: {
		type: Number,
	},
	wins: {
		type: Number,
	}
});

export default mongoose.model('Player', playerSchema);
