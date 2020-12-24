const validateAmount = (req, res, next) => {
  // In this case parseFloat("1a") will throw an error
  const isNumber = /^([0-9]*[.])?[0-9]+$/.test(req.query.amount);
  if (!isNumber) {
    // Throwing an error here, will be picked up by the errorMiddleware in server.js
    throw new Error("Please pass a real number");
  }

  // If an error is thrown, it won't reach this line
  next();
};

const errorMiddleware = (error, req, res, next) => {
  // For now, this middleware will handle all errors.
  return res.status(500).json({ error: error.toString() });
};

exports.validateAmount = validateAmount;
exports.errorMiddleware = errorMiddleware;
