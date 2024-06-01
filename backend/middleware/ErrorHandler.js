export const errorHandler = (error, req, res, next) => {
	const statusCode = error.statusCode || 500;
  const message = 'Server Error';
  res.status(statusCode).json({ message: message });
};
