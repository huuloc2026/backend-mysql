const express = require("express");
const rootRouter = express.Router();
const { stationRouter } = require("../routes/station.routes");

rootRouter.use("/stations", stationRouter);

module.exports = { rootRouter };
