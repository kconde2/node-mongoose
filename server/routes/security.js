const createToken = require("../lib/auth").createToken;
const express = require("express");
const User = require("../models/user");

const router = express.Router();

router.post("/login", (req, res) => {
  User.login(req.body.email, req.body.password)
    .then(user => {
      const token = createToken({
        firstName: user.firstname
      });

      res.status(201).send({ token });
    })
    .catch(error => {
      res.status(400).send("Invalid token n");
    });

  console.log("Login...");
});

module.exports = router;
