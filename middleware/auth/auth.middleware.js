const jwt = require("jsonwebtoken");

const autheticate = (req, res, next) => {
  const token = req.header("token");
  const decode = jwt.verify(token, "huuloc2026");

  try {
    if (decode) {
      req.user = decode;
      return next();
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = { autheticate };
