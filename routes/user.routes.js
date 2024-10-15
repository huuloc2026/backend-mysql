const express = require("express");
const { user } = require("../models");
const userRouter = express();

const { register, login } = require("../controllers/user.controllers");

userRouter.post("/register", register);
userRouter.post("/login", login);

module.exports = { userRouter };
