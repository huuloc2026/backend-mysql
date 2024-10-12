const { Op } = require("sequelize");
const { Station } = require("../models");
const createNewStationAPI = async (req, res) => {
  const { name, address, province } = req.body;
  try {
    const newStation = await Station.create({ name, address, province });
    res.status(201).send(newStation);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getAllStationAPI = async (req, res) => {
  const { name } = req.query;
  try {
    if (name) {
      const allStations = await Station.findAll({
        where: {
          name: {
            [Op.like]: `%${name}`,
          },
        },
      });
      res.status(201).send(allStations);
    } else {
      const allStations = await Station.findAll({});
      res.status(201).send(allStations);
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
const getDetailStationAPI = async (req, res) => {
  const { id } = req.params;
  try {
    const detailStation = await Station.findOne({
      where: {
        id,
      },
    });
    res.status(201).send(detailStation);
  } catch (error) {
    res.status(500).send(error);
  }
};

const UpdateStationAPI = async (req, res) => {
  const { id } = req.params;
  const { name, address, province } = req.body;
  try {
    const detailStation = await Station.findOne({
      where: {
        id,
      },
    });
    detailStation.name = name;
    detailStation.address = address;
    detailStation.province = province;
    await detailStation.save();
    res.status(201).send(detailStation);
  } catch (error) {
    res.status(500).send(error);
  }
};
const DeleteStationAPI = async (req, res) => {
  const { id } = req.params;
  try {
    await Station.destroy({
      where: {
        id,
      },
    });
    res.status(200).send(`Successs delete station with id ${id}`);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  createNewStationAPI,
  getAllStationAPI,
  getDetailStationAPI,
  UpdateStationAPI,
  DeleteStationAPI,
};
