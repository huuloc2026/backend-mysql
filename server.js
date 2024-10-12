const express = require("express");
const path = require("path");
const app = express();
const { sequelize } = require("./models/index");
const port = 3000;

const { rootRouter } = require("./routes");

// parse json
app.use(express.json());

//static
const publicPath = path.join(__dirname, "/public");
express.static(publicPath);

//dung router

app.use("/api/v1", rootRouter);

//listen
app.listen(port, async (req, res) => {
  console.log(`Hello world on port ${port}`);
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});
