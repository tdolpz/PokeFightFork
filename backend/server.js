import express from 'express';
import cors from 'cors';
const app = express();
const PORT = 8000;

// Set headers for CORS policy due to localhost environment
app.use(cors());
const setHeaders = (res) => {
	res.setHeader("Access-Control-Allow-Origin", "*")
	res.setHeader("Access-Control-Allow-Credentials", "true");
	res.setHeader("Access-Control-Max-Age", "1800");
	res.setHeader("Access-Control-Allow-Headers", "content-type");
	res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" );
};

app.listen(PORT, () => console.log(`Server is running on PORT:${PORT}`));
