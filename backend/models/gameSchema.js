import mongoose from 'mongoose';

const GameDataSchema = new mongoose.Schema({
	name: {
		type: String,
		trim: true,
	}
});

export default mongoose.model('Test', GameDataSchema);
