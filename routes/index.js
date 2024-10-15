const express = require("express");
const rootRouter = express.Router();
const { stationRouter } = require("../routes/station.routes");
const { userRouter } = require("../routes/user.routes");

rootRouter.use("/stations", stationRouter);
rootRouter.use("/users", userRouter);

module.exports = { rootRouter };
