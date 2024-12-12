import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
	try {
		const connection = await mongoose.connect(process.env.MONGO_URI);
		console.log('Connected to MongoDB');
		console.log('Database: ' + connection.connection.db.databaseName);
	} catch (error) {
		console.log('Connection errror:', error.stack);
	}
};

connectDB().then();
