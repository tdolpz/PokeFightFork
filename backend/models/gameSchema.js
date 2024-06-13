import mongoose from 'mongoose';

const playerSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'name is required'],
		unique: true,
		trim: true,
	}
});

export default mongoose.model('Player', playerSchema);
