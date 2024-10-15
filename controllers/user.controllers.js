const { user } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const register = async (req, res) => {
  const { name, email, password, numberPhone, type } = req.body;

  try {
    const salt = bcrypt.genSaltSync(10);
    const hashPasword = bcrypt.hashSync(password, salt);
    const newUser = await user.create({
      name,
      email,
      password: hashPasword,
      numberPhone,
    });

    res.status(201).send(newUser);
  } catch (error) {
    res.status(500).send(error);
  }
};
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userLogin = await user.findOne({
      where: {
        email,
      },
    });
    if (userLogin) {
      const isAuth = bcrypt.compareSync(password, userLogin.password);
      if (isAuth) {
        const token = jwt.sign(
          {
            email: userLogin.email,
            type: userLogin.type,
          },
          "huuloc2026",
          { expiresIn: 60 * 60 }
        );
        res.status(200).send({ message: "Success login", token });
      } else {
        res.status(500).send("Email/Password incorrect");
      }
    } else {
      res.status(500).send("Email/Password incorrect");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  register,
  login,
};
