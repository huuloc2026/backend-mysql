const { Station } = require("../models");
const validId = async (req, res, next) => {
  const { id } = await req.params;
  const station = await Station.findOne({
    where: {
      id,
    },
  });
  if (station) {
    next();
  } else {
    res.status(404).send(`Not found with ID ${id}`);
  }
};

const checkExist = (Model) => {
  return async (req, res, next) => {
    const { id } = await req.params;
    const station = await Model.findOne({
      where: {
        id,
      },
    });
    if (station) {
      next();
    } else {
      res.status(404).send(`Not found with ID ${id}`);
    }
  };
};

module.exports = { validId, checkExist };
