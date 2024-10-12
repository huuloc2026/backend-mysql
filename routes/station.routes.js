const express = require("express");
const { Station } = require("../models");
const stationRouter = express();
const {
  createNewStationAPI,
  getAllStationAPI,
  getDetailStationAPI,
  UpdateStationAPI,
  DeleteStationAPI,
} = require("../controllers/station.controllers");
const { checkExist } = require("../middleware/station.middleware");

stationRouter.post("/", createNewStationAPI);
stationRouter.get("/", getAllStationAPI);
stationRouter.get("/:id", checkExist(Station), getDetailStationAPI);
stationRouter.put("/:id", checkExist(Station), UpdateStationAPI);
stationRouter.delete("/:id", checkExist(Station), DeleteStationAPI);

module.exports = { stationRouter };
